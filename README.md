Jaydeep's Portfolio Website

This portfolio website is hosted simultaneously on GitHub Pages and an Amazon S3 bucket, with the S3 infrastructure managed using Terraform.

Amazon S3 setup is automated using Terraform.

Terraform configuration files are included in this repository.

Live Deployments:

S3 Deployment: http://jaysomp-portfolio.s3-website-us-east-1.amazonaws.com/

GitHub Pages: https://jaysomp.github.io/portfolio/

Upcoming Improvements:

Setting up a custom domain and DNS for the S3 bucket.

Fully migrating the portfolio to Amazon S3 once DNS is configured.

Infrastructure - Terraform Setup

The Amazon S3 bucket used for hosting this website is provisioned and configured using Terraform, ensuring a fully automated and reproducible setup. Below is an overview of what the Terraform configuration does:

1. S3 Bucket Creation

A new S3 bucket is created dynamically using a variable-based approach, allowing for easy customization of the bucket name.

2. Configuring Bucket Ownership and Access

The ownership setting ensures that the bucket owner has full control over the stored objects.

Public access settings are modified to allow read access since this is a publicly accessible website.

A public-read ACL (Access Control List) is applied to enable visitors to access the hosted files.

3. Enabling Static Website Hosting

The bucket is configured as a static website, setting index.html as the default landing page and error.html as the fallback for handling errors.

4. Applying a Bucket Policy

A bucket policy is applied to grant public read access to all objects, making the website accessible to anyone via a web browser.

5. Uploading Website Files

Terraform automatically uploads the required files, including:

index.html (Main website page)

error.html (Error page)

index.js (JavaScript logic)

index.css (CSS styles)

Images and other assets

Each of these files is stored in the appropriate folder structure to ensure they load correctly when accessed from the browser.

CI/CD Pipeline - GitHub Actions

Overview

This CI/CD pipeline automates the build and deployment process, ensuring that both GitHub Pages and the S3-hosted version of the application are updated whenever changes are pushed to the main branch.

Pipeline Flow

1. Code Commit and Trigger

Any push or merge into the main branch triggers the pipeline via GitHub Actions.

2. Build Process

The pipeline runs npm build to generate production-ready dist files.

3. Deployment to GitHub Pages

The built files are deployed to GitHub Pages for hosting.

4. S3 Deployment Preparation

File paths in index.html and index.js are modified to ensure compatibility with S3 hosting.

5. Deployment to S3

The processed dist files are uploaded to the AWS S3 bucket.

Expected Outcome

With each update to the main branch, both GitHub Pages and the S3-hosted website are automatically updated.