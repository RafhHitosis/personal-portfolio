import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { UtilsService } from '../../../services/utils.service';
import { VideoPopupComponent } from '../../modal/video-popup/video-popup.component';

@Component({
  selector: 'app-about-area-six',
  standalone: true,
  imports: [CommonModule,VideoPopupComponent],
  templateUrl: './about-area-six.component.html',
  styleUrl: './about-area-six.component.scss'
})
export class AboutAreaSixComponent {

  constructor(private sanitizer: DomSanitizer,public utilsService:UtilsService) {}
  getSafeHtml(svgContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  }

  public about_feature_list = [
    {
      icon:`<svg width="25" height="25" viewBox="0 0 25 25" fill="none">
      <path d="M12.0037 23.7486C11.4037 23.7486 10.8137 23.6086 10.3337 23.3386L5.60367 20.6086C3.64367 19.2886 3.51367 19.0486 3.51367 16.9786V12.0186C3.51367 9.94859 3.64367 9.70859 5.56367 8.41859L10.3437 5.65859C11.2937 5.10859 12.7237 5.10859 13.6737 5.65859L18.4037 8.38859C20.3637 9.70859 20.4937 9.94859 20.4937 12.0186V16.9786C20.4937 19.0486 20.3637 19.2886 18.4437 20.5786L13.6637 23.3386C13.1937 23.6186 12.5937 23.7486 12.0037 23.7486ZM12.0037 6.74859C11.6637 6.74859 11.3237 6.81859 11.0837 6.95859L6.35367 9.68859C5.01367 10.5986 5.01367 10.5986 5.01367 12.0186V16.9786C5.01367 18.3986 5.01367 18.3986 6.40367 19.3386L11.0937 22.0386C11.5737 22.3186 12.4437 22.3186 12.9237 22.0386L17.6537 19.3086C18.9937 18.3986 18.9937 18.3986 18.9937 16.9786V12.0186C18.9937 10.5986 18.9937 10.5986 17.6037 9.65859L12.9137 6.95859C12.6837 6.81859 12.3437 6.74859 12.0037 6.74859Z" fill="currentColor"/>
      <path d="M17.502 9.37854C17.092 9.37854 16.752 9.03854 16.752 8.62854V5.99854C16.752 4.41854 16.082 3.74854 14.502 3.74854H9.50195C7.92195 3.74854 7.25195 4.41854 7.25195 5.99854V8.55854C7.25195 8.96853 6.91195 9.30854 6.50195 9.30854C6.09195 9.30854 5.75195 8.97854 5.75195 8.55854V5.99854C5.75195 3.57854 7.08195 2.24854 9.50195 2.24854H14.502C16.922 2.24854 18.252 3.57854 18.252 5.99854V8.62854C18.252 9.03854 17.912 9.37854 17.502 9.37854Z" fill="currentColor"/>
      <path d="M13.6302 18.6287C13.4202 18.6287 13.2002 18.5887 12.9802 18.4987L12.0002 18.1187L11.0202 18.5087C10.4902 18.7187 9.95024 18.6687 9.55024 18.3787C9.15024 18.0887 8.94024 17.5887 8.97024 17.0187L9.03024 15.9687L8.36024 15.1587C8.00024 14.7087 7.88024 14.1887 8.04024 13.7087C8.19024 13.2387 8.60024 12.8787 9.15024 12.7387L10.1702 12.4787L10.7402 11.5887C11.3502 10.6287 12.6602 10.6287 13.2702 11.5887L13.8402 12.4787L14.8602 12.7387C15.4102 12.8787 15.8202 13.2387 15.9702 13.7087C16.1202 14.1787 16.0002 14.7087 15.6402 15.1487L14.9702 15.9587L15.0302 17.0087C15.0602 17.5787 14.8502 18.0687 14.4502 18.3687C14.2102 18.5387 13.9302 18.6287 13.6302 18.6287ZM9.52024 14.1987L10.1902 15.0087C10.4202 15.2787 10.5502 15.7087 10.5302 16.0587L10.4702 17.1087L11.4502 16.7187C11.7802 16.5887 12.2202 16.5887 12.5502 16.7187L13.5302 17.1087L13.4702 16.0587C13.4502 15.7087 13.5802 15.2887 13.8102 15.0087L14.4802 14.1987L13.4602 13.9387C13.1202 13.8487 12.7602 13.5887 12.5702 13.2987L12.0102 12.4187L11.4402 13.2987C11.2502 13.5987 10.8902 13.8587 10.5502 13.9487L9.52024 14.1987Z" fill="currentColor"/>
   </svg>`,
      title:'Leadership',
      subtitle:'Fully committed to the success company'
    },
    {
      icon:`<svg class="center-icon" width="25" height="25" viewBox="0 0 25 25" fill="none">
      <path d="M5.00195 15.9985V8.99854" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.25195 22.9985C7.04688 22.9985 8.50195 21.5435 8.50195 19.7485C8.50195 17.9536 7.04688 16.4985 5.25195 16.4985C3.45703 16.4985 2.00195 17.9536 2.00195 19.7485C2.00195 21.5435 3.45703 22.9985 5.25195 22.9985Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.00195 8.99854C6.65881 8.99854 8.00195 7.65539 8.00195 5.99854C8.00195 4.34168 6.65881 2.99854 5.00195 2.99854C3.3451 2.99854 2.00195 4.34168 2.00195 5.99854C2.00195 7.65539 3.3451 8.99854 5.00195 8.99854Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M19.002 8.99854C20.6588 8.99854 22.002 7.65539 22.002 5.99854C22.002 4.34168 20.6588 2.99854 19.002 2.99854C17.3451 2.99854 16.002 4.34168 16.002 5.99854C16.002 7.65539 17.3451 8.99854 19.002 8.99854Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.13086 15.9985C5.58086 14.2485 7.18086 12.9485 9.07086 12.9585L12.5009 12.9685C15.1209 12.9785 17.3509 11.2985 18.1709 8.9585" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
   </svg>`,
      title:'Responsibility',
      subtitle:'Employees will always be my top prioty'
    },
    {
      icon:`<svg width="25" height="25" viewBox="0 0 25 25" fill="none">
      <path d="M9.10159 14.5344C9.10159 14.1202 8.76581 13.7844 8.35159 13.7844H4.64392C3.89249 13.7844 3.7619 13.5515 3.76116 13.5498C3.75967 13.5466 3.67207 13.2926 4.16481 12.7241L13.246 2.40728C13.2461 2.4072 13.2461 2.40712 13.2462 2.40705C13.5405 2.07296 13.7834 1.89024 13.9556 1.80534C14.0536 1.757 14.1081 1.74921 14.1301 1.74876C14.1462 1.76358 14.1814 1.80495 14.2224 1.90432C14.2954 2.08082 14.357 2.37782 14.357 2.82342V11.4627C14.357 11.8769 14.6928 12.2127 15.107 12.2127H18.8147C19.5715 12.2127 19.7048 12.4482 19.706 12.4508C19.7069 12.4527 19.7955 12.7065 19.2971 13.2692L19.2956 13.2709L10.2126 23.5898C9.91817 23.924 9.67521 24.1068 9.50303 24.1917C9.40502 24.2401 9.35053 24.2479 9.32853 24.2483C9.31242 24.2335 9.27723 24.1921 9.23617 24.0927C9.16324 23.9162 9.10159 23.6192 9.10159 23.1736V14.5344ZM14.1417 1.74959C14.1417 1.74969 14.1404 1.74959 14.1378 1.74894C14.1405 1.74916 14.1418 1.74948 14.1417 1.74959ZM14.1242 1.7438C14.1218 1.74257 14.1206 1.74173 14.1207 1.74162C14.1207 1.74151 14.1219 1.74212 14.1242 1.7438ZM9.31688 24.2475C9.31692 24.2474 9.31826 24.2475 9.32079 24.2481C9.3181 24.2479 9.31683 24.2476 9.31688 24.2475ZM9.33442 24.2533C9.33685 24.2545 9.33796 24.2553 9.33791 24.2554C9.33785 24.2556 9.33664 24.2549 9.33442 24.2533Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
   </svg>`,
      title:'Flexibility',
      subtitle:'The ability to switch is an important skill'
    },
  ]
}