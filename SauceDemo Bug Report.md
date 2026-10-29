# SauceDemo Bug Report (Simple Version)

Website tested: https://www.saucedemo.com Tester: (your name) Date: 29 October 2026

This is a practice demo website for testing. Some of the login usernames on this site are made to have bugs on purpose, so testers can practice finding and reporting them. The usernames used below are: standard\_user, problem\_user, error\_user, performance\_glitch\_user, and visual\_user. The password for all of them is secret\_sauce.

## What I tested

- Logging in and logging out
- Adding and removing items from the cart
- Sorting products by price
- Completing an order (checkout)

## Bugs I found

### Bug 1: Pictures look the same for every product

**User:** problem\_user&#32;

**Steps:**

1. Log in as problem\_user.
2. Look at the Products page.

**What should happen:** Each product should have its own picture.&#32;

**What actually happens:** All products show the same picture (a dog).&#32;

**Severity:** Medium

### Bug 2: Cannot add some items to the cart

**User:** problem\_user&#32;

**Steps:**

1. Log in as problem\_user.
2. Click "Add to cart" on each product.

**What should happen:** The cart number at the top should go up for every item added.&#32;

**What actually happens:** Some buttons do not work, so the cart number stays lower than it should be.&#32;

**Severity:** High

### Bug 3: Remove button does not always work

**User:** problem\_user&#32;

**Steps:**

1. Add an item to the cart.
2. Click "Remove".

**What should happen:** The item should leave the cart and the button should say "Add to cart" again.&#32;

**What actually happens:** For some items, this does not happen.&#32;

**Severity:** Medium

### Bug 4: Sorting products does not work

**User:** problem\_user&#32;

**Steps:**

1. Use the dropdown to sort by "Name (Z to A)".

**What should happen:** The list order should change.&#32;

**What actually happens:** Nothing changes.&#32;

**Severity:** Medium

### Bug 5: Last name goes into the wrong box at checkout

**User:** problem\_user&#32;

**Steps:**

1. Add an item and go to checkout.
2. Type a first name, then type a last name.

**What should happen:** The last name should go into the Last Name box.&#32;

**What actually happens:** It goes into the First Name box instead, so the Last Name box stays empty and you cannot continue.&#32;

**Severity:** High

### Bug 6: A pop-up error appears when sorting

**User:** error\_user&#32;

**Steps:**

1. Change the sort option.

**What should happen:** The list should just sort.&#32;

**What actually happens:** A browser pop-up (alert box) with an error appears.&#32;

**Severity:** Low

### Bug 7: Cannot finish checkout

**User:** error\_user&#32;

**Steps:**

1. Add an item, fill in checkout details, click Continue, then Finish.

**What should happen:** You should see the "Thank you" page.&#32;

**What actually happens:** Checkout does not finish properly. **Severity:** Medium

### Bug 8: Login is very slow

**User:** performance\_glitch\_user&#32;

**Steps:**

1. Log in and see how long it takes.

**What should happen:** Login should be quick (a couple of seconds).&#32;

**What actually happens:** It takes around 5 seconds, with no loading message.&#32;

**Severity:** Low

### Bug 9: Button does not reset properly

**User:** standard\_user&#32;

**Steps:**

1. Add an item to the cart.
2. Open the side menu and click "Reset App State".

**What should happen:** The cart should be empty and all buttons should say "Add to cart".&#32;

**What actually happens:** The cart count clears, but the button on the product can still say "Remove" until you reload the page.&#32;

**Severity:** Low

### Bug 10: Wrong prices and messy layout

**User:** visual\_user&#32;

**Steps:**

1. Log in as visual\_user and compare the page to a normal login (standard\_user).

**What should happen:** Prices and layout should look the same as normal.&#32;

**What actually happens:** Some prices are different, and some buttons/icons are out of place.&#32;

**Severity:** Low

## What worked fine

- Logging in and out with standard\_user
- Adding/removing items with standard\_user
- Sorting with standard\_user
- Completing checkout with standard\_user

## My suggestion

I think the team should fix Bug 2 and Bug 5 first, because they stop a customer from buying anything. The other bugs are smaller but still worth fixing.
