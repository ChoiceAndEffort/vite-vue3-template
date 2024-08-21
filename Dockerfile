FROM registry.cn-hangzhou.aliyuncs.com/hbcloud-prod/nginx-web:1.0
COPY /dist/ /usr/share/nginx/html/dist/
COPY /env/nginx.conf /etc/nginx/conf.d/
RUN echo "Asia/Shanghai" > /etc/timezone
EXPOSE 80
CMD nginx -g "daemon off;"
