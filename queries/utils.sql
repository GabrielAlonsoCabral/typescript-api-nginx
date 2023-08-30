-- RETURN ALL PRODUCTS AND HIS RESPECTIVE PRODUCT_CATEGORY
SELECT
	product.id,
    product.title as "product_name",
    product.description as "product_description",
    product.price as "product_price",
    product."currencyType" as "currency_type",
    category.title as "category_name",
    category.description as "category_description"
	FROM "Product" product
	LEFT JOIN "ProductCategory" category ON category.id = product."categoryId"      
    
-- RETURN ALL PRODUCTS_IMAGES ASSOCIATES TO HIS PRODUCT AND PRODUCT_CATEGORY 
SELECT
    pi.link AS product_image_link,
    pi.alt AS product_image_alt,
    p.id AS product_id,
    p.title AS product_title,
    p.description AS product_description,
    p.price AS product_price,
    p."currencyType" AS product_currency_type,
    c.id AS category_id,
    c.title AS category_title,
    c.description AS category_description
FROM
    "ProductImage" AS pi
LEFT JOIN
    "Product" AS p ON pi."productId" = p.id
LEFT JOIN
    "ProductCategory" AS c ON p."categoryId" = c.id;
