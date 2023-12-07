

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
                modalText: "It's is a very nutritious food that is a good source of vitamin K, C, A, E, and B- 6",
                bowlImg: './images/spinach.png',
                navTo: '/grains',
                navBack: '/landing',
                progress: 12.5,
            },
            {
                name: 'Mixed greens',
                category: 'greens',
                calories: '',
                carbs: '',
                fat: '',
                protein: '',
                modalImg: 'https://www.foodservicedirect.com/media/catalog/product/1/0/10684476048963.jpg?width=1200&height=1200&quality=85&fit=bounds',
                modalText: 'Spring mix is a highly nutritious, low-calorie food that provides a high amount of vitamin A, vitamin K, folate, and manganese',
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
                modalText: "Romaine lettuce is packed with vitamin C, vitamin K, and folate. It's a good source of beta carotene, which converts into vitamin A in the body.",
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
                modalImg: 'https://w7.pngwing.com/pngs/27/997/png-transparent-dal-indian-cuisine-sambar-pigeon-pea-lentil-lentils-food-cooking-vegetables.png',
                modalText: 'All-natural, raw organic chickpeas are also known as garbanzo beans. Use chickpeas to make healthy side dishes or homemade hummus. Adding chickpeas to salads and soups provides extra fiber and protein.',
                bowlImg: '',
            },
            {
                name: 'Lentils',
                category: 'beans',
                calories: '',
                carbs: '',
                fat: '',
                protein: '',
                modalImg: 'https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/7642_Black-Eyed+Peas-cuCt44Kb-zoom.jpg',
                modalText: 'Lentils have been eaten for over 8,000 years and originated in Southwestern Masa along the Indus River. They are a staple food for many South Asian cultures. The Latin word for Lentil, Lens, was used in the 17th century to describe eye glasses because of the similarity in shape.',
                bowlImg: '',
            },
        ]
    },
    {
        category: 'roots',
        path: '/roots',
        choices: [
            {
                name: 'Beets',
                category: 'roots',
                calories: '',
                carbs: '',
                fat: '',
                protein: '',
                modalImg: 'https://i5.walmartimages.com/seo/Bull-s-Blood-Beet-Seeds-100-Heirloom-Seeds-Per-Packet-Non-GMO-USA-Homegrown-Seeds_6b32a385-d5aa-470c-aa26-2e9ca57b23ec.9f2c5c0411794a08f92a98de767c4bf4.jpeg',
                modalText: "What makes beets such gems? It turns out that the same thing that makes these root vegetables so colorful also gives you plenty of nutrients. Beets get their jewel-like hue from betalains, a type of natural plant pigment that has antioxidant and anti-inflammatory properties.",
                bowlImg: './images/beet.png',
                navTo: '/dressing',
                navBack: '/beans',
                progress: 50,

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
            {
                name: 'Vegan pesto',
                category: 'dressing',
                calories: '',
                carbs: '',
                fats: '',
                protein: '',
                modalImg: '',
                modalText: "",
                bowlImg: '',


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
    Bowl: 'https://res.cloudinary.com/dlqzrsajl/image/upload/v1701959307/bowl_zsntzm.png',
    Spinach: 'https://res.cloudinary.com/dlqzrsajl/image/upload/v1701962126/Spinach_qkwh7y.png',
    Romaine: 'https://res.cloudinary.com/dlqzrsajl/image/upload/v1701965573/Romaine_j2yofp.png',
    "Mixed greens": "https://res.cloudinary.com/dlqzrsajl/image/upload/v1701965571/Mixed_greens_ab8w1y.png",
    Quinoa: 'https://res.cloudinary.com/dlqzrsajl/image/upload/v1701965571/Quinoa_o3w4fi.png',
    "Brown rice": 'https://res.cloudinary.com/dlqzrsajl/image/upload/v1701965567/Brown_rice_zwjq0t.png',
    Buckwheat: 'https://res.cloudinary.com/dlqzrsajl/image/upload/v1701962126/Buckwheat_xuzsd3.png',
    "Black beans": 'https://res.cloudinary.com/dlqzrsajl/image/upload/v1701962125/Black_beans_rwjqwz.png',
    "Garbanzo beans": 'https://res.cloudinary.com/dlqzrsajl/image/upload/v1701965568/Garbanzo_beans_pjtmmi.png',
    Lentils: 'https://res.cloudinary.com/dlqzrsajl/image/upload/v1701965571/Lentils_v8mc5l.png',
    Beets: 'https://res.cloudinary.com/dlqzrsajl/image/upload/v1701962124/Beet_c2ebaf.png',
    Yams: 'https://res.cloudinary.com/dlqzrsajl/image/upload/v1701965576/Yam_sh7p18.png',
    Carrots: 'https://res.cloudinary.com/dlqzrsajl/image/upload/v1701965567/Carrot_uhlrso.png',
    Avacado: 'https://res.cloudinary.com/dlqzrsajl/image/upload/v1701962124/Avacado_jw0nbj.png',
    "Flax seeds": 'https://res.cloudinary.com/dlqzrsajl/image/upload/v1701965567/Flax_seeds_vpthvr.png',
    Walnuts: 'https://res.cloudinary.com/dlqzrsajl/image/upload/v1701965575/Walnuts_yzzgsb.png',
    "Vegan pesto": 'https://res.cloudinary.com/dlqzrsajl/image/upload/v1701965575/Vegan_Pesto_le4kbx.png',
    Tahini: 'https://res.cloudinary.com/dlqzrsajl/image/upload/v1701965573/Tahini_yu2ghz.png',



}

export { foods, bowlImages }
