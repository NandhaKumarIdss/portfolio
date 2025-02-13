import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-works',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './our-works.component.scss',
  templateUrl: './our-works.component.html'
})
export class OurWorksComponent implements AfterViewInit {
  @ViewChild('lightGalleryContainer', { static: false }) lightGalleryContainer!: ElementRef;

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
    lightGallery(this.lightGalleryContainer.nativeElement, {
      selector: 'a',
      mode: 'lg-fade',
      download: true,
    });
  }
}
