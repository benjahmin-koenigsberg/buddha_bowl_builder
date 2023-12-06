
const greens = [
    {
        mainText: '',
        category: 'greens',
        name: 'Spinach',
        calories: '',
        carbs: '',
        fat: '',
        protein: '',
        modalImg: 'https://www.znaturalfoods.com/cdn/shop/files/Spinach-Powder-Organic-Vegetable-Leaf-Grass-Powders-Z-Natural-Foods-3_900x.jpg?v=1685654572',
        modalText: 'Spinach is yummy',
        bowlImg: '',
        navTo: '/grains',
        navBack: '/',
        progress: 12.5,
    },
    {
        name: 'Mixed Greens',
        category: 'greens',
        calories: '',
        carbs: '',
        fats: '',
        protein: '',
        modalImg: 'https://www.foodservicedirect.com/media/catalog/product/1/0/10684476048963.jpg?width=1200&height=1200&quality=85&fit=bounds',
        modalText: 'Gotta love mixed greens',
        bowlImg: '',

    },
    {
        name: 'Romaine',
        category: 'greens',
        calories: '',
        carbs: '',
        fats: '',
        protein: '',
        modalImg: 'https://www.brothersproducewholesale.com/cdn/shop/products/RomaineLettuce_grande.jpg?v=1584844186',
        modalText: 'Yummy romaine',
        bowlImg: '',

    },

]

const grains = [
    {
        mainText: '',
        category: 'grains',
        name: 'Quiona',
        calories: '',
        carbs: '',
        fat: '',
        protein: '',
        modalImg: 'https://www.nutstoyou.com/cdn/shop/products/tri_quinoa.jpg?v=1585326329',
        modalText: 'Quinoa has a slight nutty and irrisistable flavor.  This popular food has great nutrition content as well.  Quinoa is an edible seed that tastes and feels more like a grain.',
        bowlImg: '',
        navTo: '/beans',
        navBack: '/greens',
        progress: 25,

    },
    {
        name: 'Brown Rice',
        category: 'grains',
        calories: '',
        carbs: '',
        fat: '',
        protein: '',
        modalImg: 'https://www.nutstoyou.com/cdn/shop/products/Rice_Brown_720x.jpg?v=1554839317',
        modalText: 'More nutritious than white rice, this brown rice makes an exceptionally healthy side dish or pilaf.  Great source of fiber and protein.',
        bowlImg: '',
    },
    {
        name: 'Buckwheat',
        category: 'grains',
        calories: '',
        carbs: '',
        fat: '',
        protein: '',
        modalImg: 'https://www.nutstoyou.com/cdn/shop/products/Groats.jpg?v=1554839287',
        modalText: 'Groats are the hulled grains of buckwheat (which is actually a pseudocereal). Groats are whole grains that include the cereal germ and fiber-rich bran portion of the grain as well as the endosperm (which is the usual product of milling).',
        bowlImg: '',
    },

]

const beans = [
    {
        mainText: '',
        category: 'beans',
        name: 'Black beans',
        calories: '',
        carbs: '',
        fat: '',
        protein: '',
        modalImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiktoo-rofDdnbesSM_24M5C9oFdlwXi9mu3QROLkHgb0XccmiCzDlyAoTgJnUjpMJnIA&usqp=CAU',
        modalText: 'The black turtle bean is a small, shiny variety of the common bean especially popular in Latin American cuisine, though it can also be found in the Cajun and Creole cuisines of south Louisiana. Like all varieties of the common bean, it is native to the Americas, but has been introduced around the world',
        bowlImg: '',
        navTo: '/roots',
        navBack: '/grains',
        progress: 37.5,
    },
    {
        name: 'Garbanzo beans',
        category: 'beans',
        calories: '',
        carbs: '',
        fat: '',
        protein: '',
        modalImg: 'https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/88bdc7d1a3927084-C_O_X3_F-zoom.jpg',
        modalText: 'All-natural, raw organic chickpeas are also known as garbanzo beans. Use chickpeas to make healthy side dishes or homemade hummus. Adding chickpeas to salads and soups provides extra fiber and protein.',
        bowlImg: '',
    },
    {
        name: 'Black-eyed peas',
        category: 'beans',
        calories: '',
        carbs: '',
        fat: '',
        protein: '',
        modalImg: 'https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/7642_Black-Eyed+Peas-cuCt44Kb-zoom.jpg',
        modalText: 'The black-eyed pea or black-eyed bean is a legume grown around the world for its medium-sized, edible bean. It is a subspecies of the cowpea, an Old World plant domesticated in Africa, and is sometimes simply called a cowpea.',
        bowlImg: '',
    },

]

const roots = [
    {
        mainText: '',
        name: 'Yams',
        category: 'roots',
        calories: '',
        carbs: '',
        fats: '',
        protein: '',
        modalImg: 'https://m.media-amazon.com/images/I/41ZVUCn0RoL._SY300_SX300_QL70_FMwebp_.jpg',
        modalText: "Sweet and starchy, they're delicious roasted or boiled and mashed. Sweet potatoes are a good source of beta carotene, vitamin A, B-complex vitamins, vitamin C and manganese. Grown by local farms who utilize sustainable growing practices.",
        bowlImg: '',
        navTo: '/fats',
        navBack: '/beans',
        progress: 50,

    },
    {
        name: 'Beets',
        category: 'roots',
        calories: '',
        carbs: '',
        fats: '',
        protein: '',
        modalImg: 'https://i5.walmartimages.com/seo/Bull-s-Blood-Beet-Seeds-100-Heirloom-Seeds-Per-Packet-Non-GMO-USA-Homegrown-Seeds_6b32a385-d5aa-470c-aa26-2e9ca57b23ec.9f2c5c0411794a08f92a98de767c4bf4.jpeg',
        modalText: "What makes beets such gems? It turns out that the same thing that makes these root vegetables so colorful also gives you plenty of nutrients. Beets get their jewel-like hue from betalains, a type of natural plant pigment that has antioxidant and anti-inflammatory properties.",
        bowlImg: '',

    },
    {
        name: 'Carrots',
        category: 'roots',
        calories: '',
        carbs: '',
        fats: '',
        protein: '',
        modalImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGfuXGCMhy9MKRMZyD_5Shb9r6GeAWTPc9UAeMtzSlSXaQ5LDtNZcrw1Cqzc3tQ1TQqf4&usqp=CAU',
        modalText: "Carrots contain many nutrients, including beta carotene and antioxidants, that may support your overall health as part of a nutrient-rich diet.",
        bowlImg: '',

    },

]


const toppings = [
    {
        mainText: '',
        name: 'Avacado',
        category: 'fats',
        calories: '',
        carbs: '',
        fat: '',
        protein: '',
        modalImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Avocado_Hass_-_single_and_halved.jpg/220px-Avocado_Hass_-_single_and_halved.jpg',
        modalText: "An avocado is a bright green fruit with a large pit and dark leathery skin. It's also known as alligator pear or butter fruit.Avocados are a favorite of the produce section",
        bowlImg: '',
        navTo: '/dressing',
        navBack: '/roots',
        progress: '62.5',

    },
    {
        name: 'Walnuts',
        category: 'fats',
        calories: '',
        carbs: '',
        fat: '',
        protein: '',
        modalImg: 'https://m.media-amazon.com/images/I/51hTBCvvs1L._SY300_SX300_QL70_FMwebp_.jpg',
        modalText: 'A walnut is the edible seed of any tree of the genus Juglans, particularly the Persian or English walnut, Juglans regia. The fruits of trees in the family Juglandaceae are often confused with drupes.',
        bowlImg: '',
    },
    {
        name: 'Flax seeds',
        category: 'fats',
        calories: '',
        carbs: '',
        fat: '',
        protein: '',
        modalImg: 'https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/7047_Flax+Seeds_Bowl-gX8hXXcw-large.jpg',
        modalText: "Flaxseed's health benefits come from the fact that it's high in fiber and omega-3 fatty acids, as well as phytochemicals called lignans. One tablespoon (7 grams) of ground flaxseed contains 2 grams of polyunsaturated fatty acids (includes the omega 3s), 2 grams of dietary fiber and 37 calories.",
        bowlImg: '',
    },
]




const foods = [
    {
        category: 'greens',
        path: '/greens',
        choices: [
            {
                mainText: '',
                category: 'greens',
                name: 'Spinach',
                calories: 7,
                carbs: 1.1,
                fat: 0.1,
                protein: .9,
                modalImg: 'https://www.znaturalfoods.com/cdn/shop/files/Spinach-Powder-Organic-Vegetable-Leaf-Grass-Powders-Z-Natural-Foods-3_900x.jpg?v=1685654572',
                modalText: 'Spinach is yummy',
                bowlImg: './images/spinach.png',
                navTo: '/grains',
                navBack: '/landing',
                progress: 12.5,
            },
            {
                name: 'Mixed Greens',
                category: 'greens',
                calories: '',
                carbs: '',
                fat: '',
                protein: '',
                modalImg: 'https://www.foodservicedirect.com/media/catalog/product/1/0/10684476048963.jpg?width=1200&height=1200&quality=85&fit=bounds',
                modalText: 'Gotta love mixed greens',
                bowlImg: '',

            },
            {
                name: 'Romaine',
                category: 'greens',
                calories: '',
                carbs: '',
                fat: '',
                protein: '',
                modalImg: 'https://www.brothersproducewholesale.com/cdn/shop/products/RomaineLettuce_grande.jpg?v=1584844186',
                modalText: 'Yummy romaine',
                bowlImg: '',

            },
        ]
    },
    {
        category: 'grains',
        path: '/grains',

        choices: [
            {
                path: '/grains',
                mainText: '',
                category: 'grains',
                name: 'Quinoa',
                calories: 120,
                carbs: 21.3,
                fat: 1.9,
                protein: 4.4,
                modalImg: 'https://www.nutstoyou.com/cdn/shop/products/tri_quinoa.jpg?v=1585326329',
                modalText: 'Quinoa has a slight nutty and irrisistable flavor.  This popular food has great nutrition content as well.  Quinoa is an edible seed that tastes and feels more like a grain.',
                bowlImg: './images/quinoa.png',
                navTo: '/beans',
                navBack: '/greens',
                progress: 25,

            },
            {
                name: 'Brown Rice',
                category: 'grains',
                calories: '',
                carbs: '',
                fat: '',
                protein: '',
                modalImg: 'https://www.nutstoyou.com/cdn/shop/products/Rice_Brown_720x.jpg?v=1554839317',
                modalText: 'More nutritious than white rice, this brown rice makes an exceptionally healthy side dish or pilaf.  Great source of fiber and protein.',
                bowlImg: '',
            },
            {
                name: 'Buckwheat',
                category: 'grains',
                calories: '',
                carbs: '',
                fat: '',
                protein: '',
                modalImg: 'https://www.nutstoyou.com/cdn/shop/products/Groats.jpg?v=1554839287',
                modalText: 'Groats are the hulled grains of buckwheat (which is actually a pseudocereal). Groats are whole grains that include the cereal germ and fiber-rich bran portion of the grain as well as the endosperm (which is the usual product of milling).',
                bowlImg: '',
            },

        ]
    },
    {
        category: 'beans',
        path: '/beans',
        choices: [
            {
                path: '/beans',
                mainText: '',
                category: 'beans',
                name: 'Black beans',
                calories: '',
                carbs: '',
                fat: '',
                protein: '',
                modalImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiktoo-rofDdnbesSM_24M5C9oFdlwXi9mu3QROLkHgb0XccmiCzDlyAoTgJnUjpMJnIA&usqp=CAU',
                modalText: 'The black turtle bean is a small, shiny variety of the common bean especially popular in Latin American cuisine, though it can also be found in the Cajun and Creole cuisines of south Louisiana. Like all varieties of the common bean, it is native to the Americas, but has been introduced around the world',
                bowlImg: './images/black-beans.png',
                navTo: '/roots',
                navBack: '/grains',
                progress: 37.5,
            },
            {
                name: 'Garbanzo beans',
                category: 'beans',
                calories: '',
                carbs: '',
                fat: '',
                protein: '',
                modalImg: 'https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/88bdc7d1a3927084-C_O_X3_F-zoom.jpg',
                modalText: 'All-natural, raw organic chickpeas are also known as garbanzo beans. Use chickpeas to make healthy side dishes or homemade hummus. Adding chickpeas to salads and soups provides extra fiber and protein.',
                bowlImg: '',
            },
            {
                name: 'Black-eyed peas',
                category: 'beans',
                calories: '',
                carbs: '',
                fat: '',
                protein: '',
                modalImg: 'https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/7642_Black-Eyed+Peas-cuCt44Kb-zoom.jpg',
                modalText: 'The black-eyed pea or black-eyed bean is a legume grown around the world for its medium-sized, edible bean. It is a subspecies of the cowpea, an Old World plant domesticated in Africa, and is sometimes simply called a cowpea.',
                bowlImg: '',
            },
        ]
    },
    {
        category: 'roots',
        path: '/roots',
        choices: [
            {
                name: 'Beet',
                category: 'roots',
                calories: '',
                carbs: '',
                fat: '',
                protein: '',
                modalImg: 'https://i5.walmartimages.com/seo/Bull-s-Blood-Beet-Seeds-100-Heirloom-Seeds-Per-Packet-Non-GMO-USA-Homegrown-Seeds_6b32a385-d5aa-470c-aa26-2e9ca57b23ec.9f2c5c0411794a08f92a98de767c4bf4.jpeg',
                modalText: "What makes beets such gems? It turns out that the same thing that makes these root vegetables so colorful also gives you plenty of nutrients. Beets get their jewel-like hue from betalains, a type of natural plant pigment that has antioxidant and anti-inflammatory properties.",
                bowlImg: './images/beet.png',

            },
            {
                path: '/roots',
                mainText: '',
                name: 'Yams',
                category: 'roots',
                calories: '',
                carbs: '',
                fat: '',
                protein: '',
                modalImg: 'https://m.media-amazon.com/images/I/41ZVUCn0RoL._SY300_SX300_QL70_FMwebp_.jpg',
                modalText: "Sweet and starchy, they're delicious roasted or boiled and mashed. Sweet potatoes are a good source of beta carotene, vitamin A, B-complex vitamins, vitamin C and manganese. Grown by local farms who utilize sustainable growing practices.",
                bowlImg: '',
                navTo: '/dressing',
                navBack: '/beans',
                progress: 50,

            },

            {
                name: 'Carrots',
                category: 'roots',
                calories: '',
                carbs: '',
                fat: '',
                protein: '',
                modalImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGfuXGCMhy9MKRMZyD_5Shb9r6GeAWTPc9UAeMtzSlSXaQ5LDtNZcrw1Cqzc3tQ1TQqf4&usqp=CAU',
                modalText: "Carrots contain many nutrients, including beta carotene and antioxidants, that may support your overall health as part of a nutrient-rich diet.",
                bowlImg: '',

            },
        ]
    },
    {
        category: 'dressing',
        path: '/dressing',
        choices: [
            {
                name: 'Tahini',
                category: 'dressing',
                calories: '',
                carbs: '',
                fats: '',
                protein: '',
                modalImg: '',
                modalText: "",
                bowlImg: '',
                progress: 62.5,
                navTo: '/toppings',

            },
        ]
    },
    {
        category: 'toppings',
        path: '/toppings',
        choices: [
            {
                mainText: '',
                name: 'Avacado',
                category: 'toppings',
                calories: '',
                carbs: '',
                fat: '',
                protein: '',
                modalImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Avocado_Hass_-_single_and_halved.jpg/220px-Avocado_Hass_-_single_and_halved.jpg',
                modalText: "An avocado is a bright green fruit with a large pit and dark leathery skin. It's also known as alligator pear or butter fruit.Avocados are a favorite of the produce section",
                bowlImg: './images/avacado.png',
                navTo: '/bowl',
                navBack: '/roots',
                progress: '75',

            },
            {
                name: 'Walnuts',
                category: 'toppings',
                calories: '',
                carbs: '',
                fat: '',
                protein: '',
                modalImg: 'https://m.media-amazon.com/images/I/51hTBCvvs1L._SY300_SX300_QL70_FMwebp_.jpg',
                modalText: 'A walnut is the edible seed of any tree of the genus Juglans, particularly the Persian or English walnut, Juglans regia. The fruits of trees in the family Juglandaceae are often confused with drupes.',
                bowlImg: '',
            },
            {
                name: 'Flax seeds',
                category: 'toppings',
                calories: '',
                carbs: '',
                fat: '',
                protein: '',
                modalImg: 'https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/7047_Flax+Seeds_Bowl-gX8hXXcw-large.jpg',
                modalText: "Flaxseed's health benefits come from the fact that it's high in fiber and omega-3 fatty acids, as well as phytochemicals called lignans. One tablespoon (7 grams) of ground flaxseed contains 2 grams of polyunsaturated fatty acids (includes the omega 3s), 2 grams of dietary fiber and 37 calories.",
                bowlImg: '',
            },
        ]
    }

]

const bowlImages = {
    Bowl: 'https://res.cloudinary.com/dlqzrsajl/image/upload/v1701894263/bowl_clavpl.png',
    Spinach: 'https://res.cloudinary.com/dlqzrsajl/image/upload/v1701894264/Spinach_cedtt2.png',
    Quinoa: 'https://res.cloudinary.com/dlqzrsajl/image/upload/v1701894264/Quinoa_serq0m.png',
    "Black beans": 'https://res.cloudinary.com/dlqzrsajl/image/upload/v1701894263/Black_beans_ihmjvs.png',
    Beet: 'https://res.cloudinary.com/dlqzrsajl/image/upload/v1701894263/Beet_uczzwu.png',
    Avacado: 'https://res.cloudinary.com/dlqzrsajl/image/upload/v1701894263/Avacado_o0rdds.png'



}

export {  foods, bowlImages }
