import { Page, Locator } from '@playwright/test';
import { SecureArea } from '../selectors/SecureAreaSelector.ts';


export class SecureAreaPage {
  readonly page: Page;
  readonly logoutButton: Locator;
  readonly secureHeader: Locator;
  readonly flashMessage: Locator;
  readonly secureHeaderSubtitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.flashMessage = page.locator(SecureArea.flashmessage);
    this.secureHeaderSubtitle = page.locator(SecureArea.subTitle);
    this.secureHeader = page.locator(SecureArea.Header);
    this.logoutButton = page.locator(SecureArea.logoutButton);
  }

  async clickLogout() {
    await this.logoutButton.click();
  }

  async validatePage(){
    
  }
}