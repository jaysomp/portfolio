# Defining S3 bucket resource 
resource "aws_s3_bucket" "mybucket" {
  bucket = var.bucketname
}

# Bucket ownership only to bucket owner
resource "aws_s3_bucket_ownership_controls" "mybucket" {
  bucket = aws_s3_bucket.mybucket.id

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

# Allow public access to S3 bucket
resource "aws_s3_bucket_public_access_block" "mybucket" {
  bucket = aws_s3_bucket.mybucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

# Public read S3 bucket ACL
resource "aws_s3_bucket_acl" "mybucket" {
  depends_on = [
    aws_s3_bucket_ownership_controls.mybucket,
    aws_s3_bucket_public_access_block.mybucket,
  ]

  bucket = aws_s3_bucket.mybucket.id
  acl    = "public-read"
}

# Enable static web hosting
resource "aws_s3_bucket_website_configuration" "website" {
  bucket = aws_s3_bucket.mybucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }

}

# Bucket policy
resource "aws_s3_bucket_policy" "mybucket" {
  depends_on = [ aws_s3_bucket.mybucket ]
  bucket     = aws_s3_bucket.mybucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject*"
        Resource = [
          aws_s3_bucket.mybucket.arn,
          "${aws_s3_bucket.mybucket.arn}/*",
        ]
      },
    ]
  })
}

# Upload object.html
resource "aws_s3_object" "index" {
  bucket = aws_s3_bucket.mybucket.id
  key = "index.html"
  source = "dist/index.html"
  content_type = "text/html"
  
}

# Upload error.html
resource "aws_s3_object" "error" {
  bucket = aws_s3_bucket.mybucket.id
  key = "error.html"
  source = "dist/error.html"
  content_type = "text/html"
  
}

# Upload index.js
resource "aws_s3_object" "index_js" {
  bucket       = aws_s3_bucket.mybucket.id
  key          = "assets/index-BHL6caNL.js"
  source       = "dist/assets/index-BHL6caNL.js"
  content_type = "application/javascript"
}

# Upload index.css
resource "aws_s3_object" "index_css" {
  bucket       = aws_s3_bucket.mybucket.id
  key          = "assets/index-R97h0gVT.css"
  source       = "dist/assets/index-R97h0gVT.css"
  content_type = "text/css"
}

# Upload image
resource "aws_s3_object" "dash_image" {
  bucket       = aws_s3_bucket.mybucket.id
  key          = "assets/dash-Ci9Kix3_.png"
  source       = "dist/assets/dash-Ci9Kix3_.png"
  content_type = "image/png"
}




