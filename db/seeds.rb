puts "Clearing db..."
WishList.destroy_all
Gift.destroy_all
Review.destroy_all
User.destroy_all

puts "🏕 Seeding users..."
user1 = User.create(username: 'Kristina', password: '123456')

puts "🏕 Seeding wish lists..."

puts "🏕 Seeding saved gifts..."



puts "🏕 Seeding gifts..."
gift1 = Gift.create!(gift_name: 'Kindle', tags: ['birthday', 'christmas', 'women', 'men'], price: 49.99, image_url: 'https://d3eif34l41063f.cloudfront.net/prod/1/2021/11/1637474457.png?width=800', link_url: 'https://www.amazon.com/gp/product/B07978J597?ie=UTF8&tag=giftful04-20&camp=1789&creative=9325&creativeASIN=B07978J597')
gift2 = Gift.create!(gift_name: 'Japanese Ceramic Mug', price: 41.98, tags: ['women', 'men', 'birthday'], image_url: 'https://d3eif34l41063f.cloudfront.net/prod/1/2021/11/1637474189.jpg?width=800', link_url: 'https://huckberry.com/store/hmm/category/p/60507-japanese-ceramic-mug?utm_medium=affiliate&utm_source=giftful.com&clickref=1101lwbE95Kg&utm_content=partnerize')
gift3 = Gift.create!(gift_name: 'Ray-Ban Flat Lens Hexagonal Sunglasses', tags: ['birthday', 'men'], price: 112.70, image_url: 'https://d3eif34l41063f.cloudfront.net/prod/1/2021/11/1637475517.png?width=800', link_url: 'https://www.amazon.com/gp/product/B01MZ79U8E?ie=UTF8&tag=giftful04-20&camp=1789&creative=9325&creativeASIN=B01MZ79U8E')
gift4 = Gift.create!(gift_name: 'lululemon Everywhere Belt Bag', tags: ['birthday', 'women'], price: 38.00, image_url: 'https://images.lululemon.com/is/image/lululemon/LU9AZ5S_055043_1?size=800,800', link_url: 'https://go.skimresources.com/?id=126111X1597379&isjs=1&jv=15.3.0-stackpath&sref=https%3A%2F%2Fgiftful.com%2Fexplore&url=https%3A%2F%2Fshop.lululemon.com%2Fp%2Fbags%2FEverywhere-Belt-Bag%2F_%2Fprod8900747%3Fcolor%3D47798%26sz%3DONESIZE&xs=1&xtz=240&xuuid=53d2c1ed532cb8b1022b3eb380cae413&xjsf=other_click__contextmenu%20%5B2%5D')
gift5 = Gift.create!(gift_name: 'OUAI Dean Street Eau de Parfum', tags: ['birthday', 'christmas', 'anniversary', 'women'], price: 56.00, image_url: 'https://d3eif34l41063f.cloudfront.net/prod/1/2021/11/1637519526.png?width=800', link_url: 'https://www.ulta.com/p/dean-street-eau-de-parfum-pimprod2025730?AID=165150&PID=10078&CID=af_165150_10078_&clickId=XBwXgB0-mxyNUGr1692t21xJUkDQ0KUY00000w0&SubID=giftful.com&utm_medium=affiliate&utm_source=10078&utm_campaign=Content&utm_content=core&irgwc=1')
gift6 = Gift.create!(gift_name: 'Vitruvi Terracotta Stone Essential Oil Diffuser',  tags: ['House Warming', 'women'],price: 119.00, image_url: 'https://d3eif34l41063f.cloudfront.net/prod/1/2021/11/1637472407.jpg?width=800', link_url: 'https://www.anthropologie.com/shop/vitruvi-terracotta-stone-essential-oil-diffuser?category=gifts-top-rated&color=067&type=STANDARD&size=One%20Size&quantity=1&cm_mmc=rakuten-_-affiliates-_-Skimlinks.com-_-1&utm_medium=affiliates&utm_source=rakuten&utm_campaign=Skimlinks.com&utm_term=1166718&utm_content=1&utm_kxconfid=v3sdgfere&ranMID=39789&ranEAID=TnL5HPStwNw&ranSiteID=TnL5HPStwNw-nntXmp_OMSvfCZGc9I69IA')
gift7 = Gift.create!(gift_name: 'Bumble Bee Pinata', tags: ['Baby Shower', 'kids'], price: 35.99, image_url: 'https://target.scene7.com/is/image/Target/GUEST_6d7605ae-938c-4510-93d1-efd3d97916ef?wid=199&hei=199&qlt=80&fmt=pjpeg', link_url: 'https://www.target.com/p/bumble-bee-pinata-for-baby-shower-gender-reveal-kids-honey-bee-birthday-party-supplies-small-15-5-x-13-inches/-/A-81891466#lnk=sametab')
gift8 = Gift.create!(gift_name: 'Jenga Game', tags: ['Birthday', 'kids'], price: 11.99, image_url: 'https://target.scene7.com/is/image/Target/GUEST_2ff3e3eb-c38d-4c5a-a6bc-7b95b96c3fec?wid=199&hei=199&qlt=80&fmt=pjpeg', link_url: 'https://www.target.com/p/jenga-game/-/A-11199378#lnk=sametab')
gift9 = Gift.create!(gift_name: 'The Lip Trio in Cranberry', tags: ['Birthday', 'women'], price: 50.00, image_url: 'https://d3eif34l41063f.cloudfront.net/prod/1/2021/11/1637517839.png?width=550', link_url: 'https://go.skimresources.com/?id=126111X1597379&isjs=1&jv=15.3.0-stackpath&sref=https%3A%2F%2Fgiftful.com%2Fexplore&url=https%3A%2F%2Fwww.glossier.com%2Fproducts%2Fthe-lip-trio-in-cranberry&xs=1&xtz=240&xuuid=aa0bc7d5e1b0f17800d9bf4b981352c4&xjsf=other_click__auxclick%20%5B1%5D')
gift10 = Gift.create!(gift_name: 'Desktop Vlogging Ring Light', tags: ['Birthday', 'Christmas' 'women', 'kids'], price: 28.00, image_url: 'https://d3eif34l41063f.cloudfront.net/prod/1/2020/11/1606280812.jpg?width=800', link_url: 'https://www.urbanoutfitters.com/cell-phone-accessories?category=tech-gifts&color=001&quantity=1&ranEAID=TnL5HPStwNw&ranMID=43176&ranSiteID=TnL5HPStwNw-c38Q5uak_V.ob8p7yt9ntg&size=ONE%20SIZE&type=REGULAR&utm_campaign=Skimlinks.com&utm_content=1&utm_medium=affiliates&utm_source=LS&utm_term=886033')
gift11 = Gift.create!(gift_name: 'Dynacraft Magna Kids Bike Boys 20 Inch Wheels in Black', tags: ['Birthday', 'Christmas', 'kids'], price: 119.47, image_url: 'https://d3eif34l41063f.cloudfront.net/prod/1/2021/11/1637467674.png?width=800', link_url: 'https://www.amazon.com/gp/product/B00LPBM7CM?ie=UTF8&tag=giftful04-20&camp=1789&creative=9325&creativeASIN=B00LPBM7CM')
gift12 = Gift.create!(gift_name: 'Infrared Sauna Blanket V3', tags: ['Birthday', 'Christmas', 'women'], price: 449.00, image_url: 'https://d3eif34l41063f.cloudfront.net/prod/1/2021/10/1635198712.png?width=800', link_url: 'https://go.skimresources.com/?id=126111X1597379&isjs=1&jv=15.3.0-stackpath&sref=https%3A%2F%2Fgiftful.com%2Fexplore&url=https%3A%2F%2Fhigherdose.com%2Fproducts%2Finfrared-sauna-blanket-v3%3Futm_source%3DInstagram_Stories%26utm_medium%3DCurrent%2BEvents%26utm_campaign%3DProspecting%2B-%2BInterests%2B-%2BSeptember%2B2021%26utm_content%3DLauren%2B-%2BFounder%2BVideo%2B-%2BCut%2BDown%26utm_term%3D6241273686363%26fbclid%3DPAAaaeXKOhnyYhFmfy3RuFo0ESABwgdGap1UKTQrj76RSkzO21S_S5UGGBa_Y_aem_AVXc6FFqc0NGgMLQDKOq1x8a7MH2FeFBbMfIOBxAJLZ8GIWzxlWZsjuakJMHSVLiP40X7lq_HHIOS9b9l1jvdU0dDMY4Le1PDzXIiLt6hNvNzIDaKnSHUl2uEtYnuiD4pQk&xs=1&xtz=240&xuuid=aa0bc7d5e1b0f17800d9bf4b981352c4&xjsf=other_click__auxclick%20%5B1%5D')
gift13 = Gift.create!(gift_name: 'Quilted Jersey Robe', tags: ['Birthday', 'Christmas', 'men'], price: 148.00, image_url: 'https://d3eif34l41063f.cloudfront.net/prod/1/2021/11/1637473981.jpg?width=800', link_url: 'https://go.skimresources.com/?id=126111X1597379&isjs=1&jv=15.3.0-stackpath&sref=https%3A%2F%2Fgiftful.com%2Fexplore&url=https%3A%2F%2Fhuckberry.com%2Fstore%2Fwellen%2Fcategory%2Fp%2F71976-quilted-jersey-robe&xs=1&xtz=240&xuuid=aa0bc7d5e1b0f17800d9bf4b981352c4&xjsf=other_click__auxclick%20%5B1%5D')
gift14 = Gift.create!(gift_name: 'Frisco Jungle Pals Plush & Rope Variety Pack Dog Toy', tags: ['Birthday', 'Christmas', 'pets'], price: 11.98, image_url: 'https://image.chewy.com/is/image/catalog/177819_Main._AC_SL600_V1573143796_.jpg', link_url: 'https://www.chewy.com/frisco-jungle-pals-plush-rope-variety/dp/204504?utm_source=google-product&utm_medium=cpc&utm_campaign=12651121862&utm_content=Frisco&utm_term=&gclid=Cj0KCQjwnP-ZBhDiARIsAH3FSRf3S004nNOoyjdMr48HKuVr4xW7Z-TH3yZHMNS9FmJwqFEIubS5EjkaAue0EALw_wcB')






puts "🏕 Seeding reviews..."
# review1 = Review.create(gift_id: gift1.id, user_id: user1.id, review: 'not a bad book')
# review2 = Review.create(gift_id: gift2.id, user_id: user1.id, review: 'good camera')
# review3 = Review.create(gift_id: gift3.id, user_id: user1.id, review: 'my hubby loved hockey')
# review4 = Review.create(gift_id: gift4.id, user_id: user1.id, review: 'the best experience ever')
# review5 = Review.create(gift_id: gift5.id, user_id: user2.id, review: 'good quality')
# review6 = Review.create(gift_id: gift6.id, user_id: user2.id, review: 'very soft')
# review7 = Review.create(gift_id: gift7.id, user_id: user2.id, review: 'wifey loved her new puppy')
# review8 = Review.create(gift_id: gift8.id, user_id: user2.id, review: 'got wrong size, but tshirt is good')

puts "✅ Done seeding!"