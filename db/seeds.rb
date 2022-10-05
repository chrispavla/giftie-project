puts "Clearing db..."
WishList.destroy_all
Gift.destroy_all
Review.destroy_all
User.destroy_all

puts "🏕 Seeding users..."
user1 = User.create(username: 'John', password: '123456')
user2 = User.create(username: 'Kristina', password: '123456')

puts "🏕 Seeding wish lists..."
wishlist1 = WishList.create(title: 'Mom Christmas', note: 'gift ideas for mom')
wishlist2 = WishList.create(title: 'Husband Anniversary', note: 'some ideas for anniversary')
wishlist3 = WishList.create(title: 'Cousin Bday', note: 'ideas for cousins bday')

puts "🏕 Seeding saved gifts..."
saved_gift1 = SavedGift.create!(gift_name: 'lululemon Everywhere Belt Bag', price: 38.00, image_url: 'https://images.lululemon.com/is/image/lululemon/LU9AZ5S_055043_1?size=800,800', link_url: 'https://go.skimresources.com/?id=126111X1597379&isjs=1&jv=15.3.0-stackpath&sref=https%3A%2F%2Fgiftful.com%2Fexplore&url=https%3A%2F%2Fshop.lululemon.com%2Fp%2Fbags%2FEverywhere-Belt-Bag%2F_%2Fprod8900747%3Fcolor%3D47798%26sz%3DONESIZE&xs=1&xtz=240&xuuid=53d2c1ed532cb8b1022b3eb380cae413&xjsf=other_click__contextmenu%20%5B2%5D', user_id: user1.id, wish_list_id: wishlist1.id)
saved_gift2 = SavedGift.create!(gift_name: 'OUAI Dean Street Eau de Parfum', price: 56.00, image_url: 'https://d3eif34l41063f.cloudfront.net/prod/1/2021/11/1637519526.png?width=800', link_url: 'https://www.ulta.com/p/dean-street-eau-de-parfum-pimprod2025730?AID=165150&PID=10078&CID=af_165150_10078_&clickId=XBwXgB0-mxyNUGr1692t21xJUkDQ0KUY00000w0&SubID=giftful.com&utm_medium=affiliate&utm_source=10078&utm_campaign=Content&utm_content=core&irgwc=1', user_id: user1.id, wish_list_id: wishlist1.id)
saved_gift3 = SavedGift.create!(gift_name: 'Vitruvi Terracotta Stone Essential Oil Diffuser', price: 119.00, image_url: 'https://d3eif34l41063f.cloudfront.net/prod/1/2021/11/1637472407.jpg?width=800', link_url: 'https://www.anthropologie.com/shop/vitruvi-terracotta-stone-essential-oil-diffuser?category=gifts-top-rated&color=067&type=STANDARD&size=One%20Size&quantity=1&cm_mmc=rakuten-_-affiliates-_-Skimlinks.com-_-1&utm_medium=affiliates&utm_source=rakuten&utm_campaign=Skimlinks.com&utm_term=1166718&utm_content=1&utm_kxconfid=v3sdgfere&ranMID=39789&ranEAID=TnL5HPStwNw&ranSiteID=TnL5HPStwNw-nntXmp_OMSvfCZGc9I69IA', user_id: user2.id, wish_list_id: wishlist2.id)
saved_gift4 = SavedGift.create!(gift_name: 'Ray-Ban Flat Lens Hexagonal Sunglasses', price: 112.70, image_url: 'https://d3eif34l41063f.cloudfront.net/prod/1/2021/11/1637475517.png?width=800', link_url: 'https://www.amazon.com/gp/product/B01MZ79U8E?ie=UTF8&tag=giftful04-20&camp=1789&creative=9325&creativeASIN=B01MZ79U8E', user_id: user2.id, wish_list_id: wishlist2.id)

puts "🏕 Seeding gifts..."
gift1 = Gift.create!(gift_name: 'Kindle', tags: ['birthday', 'christmas', 'women', 'men'], price: 49.99, image_url: 'https://d3eif34l41063f.cloudfront.net/prod/1/2021/11/1637474457.png?width=800', link_url: 'https://www.amazon.com/gp/product/B07978J597?ie=UTF8&tag=giftful04-20&camp=1789&creative=9325&creativeASIN=B07978J597')
gift2 = Gift.create!(gift_name: 'Japanese Ceramic Mug', price: 41.98, tags: ['women', 'men'], image_url: 'https://d3eif34l41063f.cloudfront.net/prod/1/2021/11/1637474189.jpg?width=800', link_url: 'https://huckberry.com/store/hmm/category/p/60507-japanese-ceramic-mug?utm_medium=affiliate&utm_source=giftful.com&clickref=1101lwbE95Kg&utm_content=partnerize')
gift3 = Gift.create!(gift_name: 'Hockey tickets', price: 230.00, tags: ['women', 'men'])
gift4 = Gift.create!(gift_name: 'Horseback riding experience', price: 45.00, tags: ['birthday', 'women', 'men'])


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