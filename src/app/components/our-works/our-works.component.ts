import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef, inject, OnDestroy } from '@angular/core';
import { Fancybox } from '@fancyapps/ui';



@Component({
    selector: 'app-our-works',
    standalone: true,
    imports: [CommonModule],
    styleUrl: './our-works.component.scss',
    templateUrl: './our-works.component.html'
})
export class OurWorksComponent implements AfterViewInit, OnDestroy {
  @ViewChild('lightGalleryContainer', { static: false }) lightGalleryContainer!: ElementRef;
  private elRef: ElementRef = inject(ElementRef);

  images = [
    {
      title: 'Hospital Management System',
      thumbnail: '/images/projects_ss/HospitalManagementSystem.jpg',
      fullSize: '/images/projects_ss/HospitalManagementSystem.jpg',
      description: 'A comprehensive system for managing hospital operations, patient records, and appointments.'
    },
    {
      title: 'Supermarket Management System',
      thumbnail: '/images/projects_ss/Supermarket.jpg',
      fullSize: '/images/projects_ss/Supermarket.jpg',
      description: 'An automated solution for inventory tracking, billing, and customer management in supermarkets.'
    },
    {
      title: 'Billing System',
      thumbnail: '/images/projects_ss/billing.jpg',
      fullSize: '/images/projects_ss/billing.jpg',
      description: 'A user-friendly billing system designed for efficient invoice generation and tracking.'
    },
    {
      title: 'E-commerce Website',
      thumbnail: '/images/projects_ss/clothing.jpg',
      fullSize: '/images/projects_ss/clothing.jpg',
      description: 'A modern e-commerce platform featuring product catalogs, secure payments, and order tracking.'
    }
  ];

  ngAfterViewInit() {
    Fancybox.bind(this.elRef.nativeElement, '[data-fancybox]', {
      closeButton: 'auto', 
      caption: function (fancybox, slide) {
        return slide.caption ? `<span>${slide.caption}</span>` : ''; 
      },
    });
  }

  ngOnDestroy() {
    Fancybox.unbind(this.elRef.nativeElement);
    Fancybox.close();
  }
}
