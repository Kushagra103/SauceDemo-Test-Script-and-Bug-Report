This repository contains an automated test suite and bug report for SauceDemo (https://www.saucedemo.com), a free, open demo e-commerce website built specifically for people to practice software testing. SauceDemo is widely used by QA learners and professionals because it simulates a real online shopping experience — login, product browsing, cart management, and checkout — while also including intentionally broken user accounts that let testers practice finding and documenting real-world bugs.

The project is written using Playwright, a modern browser automation framework for JavaScript, and is designed to be approachable for testers who are just starting out. Rather than relying on complex helper functions or advanced patterns, the test script spells out each step directly: filling in fields, clicking buttons, and checking results, with comments explaining what each test is doing and why it matters.

What this repository covers:

Logging in with valid and invalid credentials, including the locked-out and problem user accounts
Verifying error messages for missing or incorrect login details
Adding and removing products from the shopping cart
Confirming the cart badge updates correctly
Sorting products by price and checking the order is correct
Completing the full checkout process from cart to order confirmation
Logging out and verifying session handling

Known-bug coverage:
SauceDemo deliberately ships several faulty accounts (problem_user, error_user, performance_glitch_user, and visual_user) so testers can practice spotting defects. This repo includes tests written to expose those issues — such as broken add-to-cart buttons, checkout fields that write into the wrong box, unexpected pop-up alerts, slow logins, and visual inconsistencies — along with a written bug report describing each defect in plain language: what was tested, what should happen, and what actually happens.

Who this is for:
This project is aimed at beginners learning test automation and bug reporting, as well as anyone who wants a ready-made example of how to structure simple Playwright tests and clear, readable QA documentation. It can be used as a learning reference, a starting template for your own test suite, or a demonstration piece for a QA portfolio.
