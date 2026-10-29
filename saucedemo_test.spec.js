// SauceDemo Test Script
// This is a beginner-level test script written using Playwright.
//
// How to run this:
// 1. Install node.js
// 2. In your project folder, run: npm init -y
// 3. Run: npm install -D @playwright/test
// 4. Run: npx playwright install
// 5. Run the tests: npx playwright test saucedemo_test.spec.js
//
// Website being tested: https://www.saucedemo.com
// This is a free demo shopping website made for practicing testing.

const { test, expect } = require('@playwright/test');

const websiteUrl = 'https://www.saucedemo.com/';

// Test 1: Check that a user can log in with correct username and password
test('Test 1 - Login with correct details works', async ({ page }) => {
  await page.goto(websiteUrl);

  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  // After login, the page should show the Products page
  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.locator('[data-test="title"]')).toHaveText('Products');
});

// Test 2: Check that login fails with wrong password
test('Test 2 - Login with wrong password shows error', async ({ page }) => {
  await page.goto(websiteUrl);

  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'wrong_password');
  await page.click('[data-test="login-button"]');

  // An error message should appear
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

// Test 3: Check that login fails when username and password are empty
test('Test 3 - Login with empty fields shows error', async ({ page }) => {
  await page.goto(websiteUrl);

  await page.click('[data-test="login-button"]');

  await expect(page.locator('[data-test="error"]')).toContainText('Username is required');
});

// Test 4: Check that the locked out user cannot log in
test('Test 4 - Locked out user cannot login', async ({ page }) => {
  await page.goto(websiteUrl);

  await page.fill('[data-test="username"]', 'locked_out_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  await expect(page.locator('[data-test="error"]')).toContainText('locked out');
});

// Test 5: Check that a product can be added to the cart
test('Test 5 - Add a product to the cart', async ({ page }) => {
  await page.goto(websiteUrl);
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  // Add the backpack to the cart
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

  // The cart icon should now show "1"
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
});

// Test 6: Check that a product can be removed from the cart
test('Test 6 - Remove a product from the cart', async ({ page }) => {
  await page.goto(websiteUrl);
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('[data-test="remove-sauce-labs-backpack"]');

  // The cart badge should disappear once the item is removed
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveCount(0);
});

// Test 7: Check that products can be sorted from low price to high price
test('Test 7 - Sort products by price (low to high)', async ({ page }) => {
  await page.goto(websiteUrl);
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  await page.selectOption('[data-test="product-sort-container"]', 'lohi');

  // Get all prices shown on the page
  const priceTexts = await page.locator('[data-test="inventory-item-price"]').allTextContents();
  const prices = priceTexts.map(text => parseFloat(text.replace('$', '')));

  // Make a sorted copy to compare against
  const sortedPrices = [...prices].sort((a, b) => a - b);

  expect(prices).toEqual(sortedPrices);
});

// Test 8: Check that the full checkout process works
test('Test 8 - Complete a full checkout', async ({ page }) => {
  await page.goto(websiteUrl);
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('[data-test="shopping-cart-link"]');
  await page.click('[data-test="checkout"]');

  await page.fill('[data-test="firstName"]', 'Asha');
  await page.fill('[data-test="lastName"]', 'Verma');
  await page.fill('[data-test="postalCode"]', '201001');
  await page.click('[data-test="continue"]');

  await page.click('[data-test="finish"]');

  // After finishing, we should see the "Thank you" message
  await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
});

// Test 9: Check that logout works
test('Test 9 - Logout works correctly', async ({ page }) => {
  await page.goto(websiteUrl);
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  await page.click('#react-burger-menu-btn');
  await page.click('[data-test="logout-sidebar-link"]');

  // After logout, we should be back on the login page
  await expect(page).toHaveURL(websiteUrl);
});

// Test 10: Check the "problem_user" account - trying to add a product to cart
// NOTE: This user is known to be buggy on purpose (it's a demo site feature).
// This test is expected to FAIL - that is how we find and report the bug.
test('Test 10 - problem_user: add to cart may not work (known bug)', async ({ page }) => {
  await page.goto(websiteUrl);
  await page.fill('[data-test="username"]', 'problem_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

  // We expect the cart badge to show 1, but with problem_user it may not work
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
});
