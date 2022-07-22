import pic1 from "../images/product images/munimji/Chilli Powder.png"
import pic2 from "../images/product images/munimji/Coriander Powder.png"
import pic3 from "../images/product images/munimji/Garam Masala.png"
import pic4 from "../images/product images/munimji/Mango Powder.png"
import pic5 from "../images/product images/munimji/Turmeric Powder.png"
import pic6 from "../images/product images/munimji/Achar Masala.png";



const Items = [
    {
        id:1,
        image:pic1,
        description: "Made from the finest red chillies handpicked by our field experts, Munimji brings you exquisite red chilli powder ground to perfection for your everyday cooking. Use it in your everyday dishes to get that rich colour and aroma, along with the spiciness that contributes to the overall flavour of your cooked dishes.",
        "available": ["Rs 10 | Rs 20 | 50g | 100g", "200g | 500g | 1kg | 5kg | 10kg"],
        category:'MUNIMJI MASALE',
        spice : 'Munimji Chilli Powder',
    },
    {
        id:2,
        image:pic5,
        description: "Turmeric not only lends a distinctive hue to your dish but also has proven health benefits making it an integral part of your daily meal. Munimji Turmeric Powder comes with all the health benefits, neatly accompanied by top-class quality and purity. A small pinch of this turmeric powder is enough to give your dish the rich colour and to you, the wonder of good health.",
        "available": ["Rs 5 (12g) | Rs 10 (24g) | 50g | 100g", "200g | 500g | 1kg | 5kg | 10kg"],
        category:'MUNIMJI MASALE',
        spice : 'Munimji Turmeric Powder',
    },
    {
        id:3,
        image:pic2,
        description: "The best quality coriander seeds are grounded to create robust and flavourful Munimji Coriander Powder. This spice blend plays a huge role in giving your everyday dishes a great dollop of flavour and a smacking tinge.",
        "available": ["Rs 5 (12g) | Rs 10 (24g) | 50g | 100g", "200g | 500g | 1kg | 5kg | 10kg"],
        category:'MUNIMJI MASALE',
        spice : 'Munimji Coriander Powder',
    },
    {
        id:4,
        image:pic4,
        description: "A pretty unique ingredient, Munimji Mango Powder is both sweet and tangy at the same time. This unique property makes it an important spice to have in your kitchen. Enjoy this fresh burst of tangy flavours with Munimji Mango Powder!",
        "available": ["50g I 100g I 200g I 500g"],
        category:'MUNIMJI MASALE',
        spice : 'Munimji Mango Powder',
    },
    {
        id:5,
        image:pic3,
        description:"Munimji Garam Masala Powder is this right blend of amazingly different flavours and textures of countless whole spices, all fused together, grounded to perfection. The formulation is bound to enhance the flavours of your everyday food.",
        "available": ["50g | 100g | 200g | 500g"],
        'recipe': ['Sprinkle a small quantity of Munimji Garam Masala on all kinds of cooked vegetables to get that aromatic flavour and delicious taste.',
            'Use Munimji Garam Masala in Bhajiya, Kachori,  Samosa, Pulav etc. to make them tastier and aromatic.',
    ],
        category:'MUNIMJI MASALE',
        spice : 'Munimji Garam Masala',
    },
    {
        id:6,
        image:pic6,
        description:"Indian households are incomplete without varieties of achaar lining their shelves and dining tables. Munimji Achaar Masala is the best pickle blend to create delicious, achaars that act as the perfect side for your delectable dishes. Use this masala in the preparation of your pickle and you will never go wrong in making the best achaar for your family.",
        "available": ["200g | 500g"],
        'recipe': ['After washing, cut small pieces of 1.5 kg raw mangoes, or for mixed pickles, cut pieces of lemon, carrot, ginger, green chilli, gonda, karonda etc.',
            'In these pieces, mix the whole packet of Pushp Munimji Achar Masala',
            'Now pour 500g of Mustard Oil into this mixture and mix throughly',
            'Tasty, spicy pickle is ready to eat!!',
    ],
        Note: 'There is no need to mix any other spices in the pickle mixture.',
        category:'MUNIMJI MASALE',
        spice : 'Munimji Achar Masala',
    },
]
export default Items;