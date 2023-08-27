puts "🌱 Seeding spices..."

User.create(first_name: "Alex", last_name: "Manes", username: "spectralsongwrite", password: "dsIda83?lk" )
User.create(first_name: "Maria", last_name: "DeLuca", username: "amethystoracle", password: "handinmypocket")

Book.create(title: "100 Bullets", author: "Brian Azzarello", artist: "Eduardo Risso", genre: "Crime", publisher: "Vertigo", volume: 1, user_id: 1, cover_url:"https://m.media-amazon.com/images/P/1563896451.01._SCLZZZZZZZ_SX500_.jpg")
Book.create(title: "Saga", author: "Brian K. Vaughan", artist: "Fiona Staples", genre: "Science Fiction", publisher: "Image", volume: 1, user_id: 2, cover_url:"https://m.media-amazon.com/images/I/719UvBwUycL.jpg")
Book.create(title: "All Star Superman", author: "Grant Morrison", artist: "Frank Quietly", genre: "Superhero", publisher: "DC", volume: 1, user_id: 2, cover_url:"https://m.media-amazon.com/images/I/71RgvfEIzlL.jpg")
Book.create(title: "Batman: The Long Halloween", author: "Jeph Loeb", artist: "Tim Sale", genre: "Superhero", publisher: "DC", volume: 1, user_id: 1, cover_url:"https://m.media-amazon.com/images/I/91D+7bVSo0L.jpg")
Book.create(title: "X-MEN: Days of Future Past", author: "Chris Claremont", artist: "John Byrne", genre: "Superhero", publisher: "Marvel", volume: 1, user_id: 1, cover_url:"https://m.media-amazon.com/images/I/913UGh9L+XL.jpg")
Book.create(title: "Secret Wars", author: "Jonathan Hickman", artist: "Esad Ribic", genre: "Superhero", publisher: "Marvel", volume: 1, user_id: 1, cover_url:"https://m.media-amazon.com/images/I/91bkXurWqkL.jpg")
Book.create(title: "The Goon", author: "Eric Powell", artist: "Eric Powell", genre: "Noir", publisher: "Dark Horse", volume: 1, user_id: 2, cover_url:"https://cdn.kobo.com/book-images/bae62fde-57be-4d53-a9e2-4494ed8f9da9/1200/1200/False/the-goon-vol-1-bunch-of-old-crap-an-omnibus.jpg")
Book.create(title: "Tomie", author: "Junji Ito", artist: "Junji Ito", genre: "Horro", publisher: "Viz Media", volume: 1, user_id: 2, cover_url:"https://m.media-amazon.com/images/P/B01M7XY0KL.01._SCLZZZZZZZ_SX500_.jpg")
Book.create(title: "On A Sunbeam", author: "Tillie Walden", artist: "Tillie Walden", genre: "Science Fiction", publisher: "First Second", volume: 1, user_id: 2, cover_url:"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781250178138_p0_v2_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D")


puts "✅ Done seeding!"