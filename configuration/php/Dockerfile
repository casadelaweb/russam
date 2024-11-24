FROM php:8.2-fpm

RUN docker-php-ext-install mysqli pdo pdo_mysql && docker-php-ext-enable mysqli pdo pdo_mysql

WORKDIR /var/www/html

COPY . /var/www/html

COPY ./configuration/php/php.ini /usr/local/etc/php/php.ini

RUN chown -R www-data:www-data /var/www/html

EXPOSE 9000

CMD ["php-fpm"]