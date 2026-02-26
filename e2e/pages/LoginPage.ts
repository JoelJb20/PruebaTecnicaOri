import { Page, Locator } from '@playwright/test';
import { LP_Selector } from '../selectors/LoginPageSelector';


export class LoginPage {
  readonly page: Page;

  readonly loginHeader: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly flashMessage: Locator;


  constructor(page: Page) {
    this.page = page;

    this.loginHeader = page.locator(LP_Selector.pageHeader);
    this.usernameInput = page.locator(LP_Selector.usernameInput);
    this.passwordInput = page.locator(LP_Selector.passwordInput);
    this.loginButton = page.locator(LP_Selector.loginButton);
    this.flashMessage = page.locator(LP_Selector.flashMessage);

  }

  async goto() {
    await this.page.goto(process.env.BASE_URL + '/login');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}