import { FaRegCreditCard, FaRegHandshake, FaScaleBalanced, FaWallet } from "react-icons/fa6";
import { FaMapMarkerAlt, FaPhoneAlt, FaFax, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { TbTargetArrow } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { BsBank2 } from "react-icons/bs";

export const featureList = [
    {
        id: 1,
        icon: <TbTargetArrow color="#0A1930" size={22} />,
        heading: "Target Savings",
        text: 'Save for specific needs such as Hajj/Umrah, school fees, house rent, investments, etc.'
    },
    {
        id: 2,
        icon: <TiShoppingCart color="#0A1930" size={22} />,
        heading: "Consumer Facilities",
        text: 'Order regular consumables, make special commodity requests, and fulfill Ramadan and Eid needs.'
    },
    {
        id: 3,
        icon: <BsBank2 color="#0A1930" size={22} />,
        heading: "Islamic Financial Products",
        text: 'Engage in ethical financial services such as Investment Partnership (Mudharabah), Cost-plus Financing (Murabaha), Benevolent Lending (Qard), and Joint Enterprise (Musharaka).'
    },
    {
        id: 4,
        icon: <FaRegCreditCard color="#0A1930" size={22} />,
        heading: "Interest-Free Loan",
        text: ' Members can access funds without the burden of interest, providing a pathway to financial empowerment and growth without compromising ethical principles.'
    },
];

export const objectives = [
    {
        id: 1,
        icon: <FaWallet color="#0A1930" size={22} />,
        heading: "Savings Facilities",
        text: 'Ensure your future security through our member-centric savings choices.'
    },
    {
        id: 2,
        icon: <FaRegCreditCard color="#0A1930" size={22} />,
        heading: "Zero-Interest Credit",
        text: 'Access credit at zero interest rates, aligning with ethical financial principles.'
    },
    {
        id: 3,
        icon: <FaScaleBalanced color="#0A1930" size={22} />,
        heading: "Quality of Life",
        text: 'Enhance your life through financial empowerment and community support.'
    },
    {
        id: 4,
        icon: <FaRegHandshake color="#0A1930" size={22} />,
        heading: "Mutual Financial Management",
        text: 'Enable members to manage resources for shared benefits within our cooperative community.'
    },
];

export const criteria = [
    {
        id: 1,
        title: 'Religion',
        details: 'You must be a muslim of reputable character.',
        animation: 'fade-left',
    },
    {
        id: 2,
        title: 'Adult',
        details: 'You must be a responsible adult of not less than Eighteen (18) years of age.',
        animation: 'fade-right',
    },
    {
        id: 3,
        title: 'Residency',
        details: 'You must be a resident of Kano State.',
        animation: 'fade-left',
    },
];

export const navLinks = [
    {
        id: 'about',
        name: 'About'
    },
    {
        id: 'eligibility',
        name: 'Eligibility'
    },
    {
        id: 'services',
        name: 'Services'
    },
    {
        id: 'contact',
        name: 'Contact'
    },
];

export const footerServices = [
    {
        id: 'target-savings',
        name: 'Target Savings'
    },
    {
        id: 'consumer-facilities',
        name: 'Consumer Facilities'
    },
    {
        id: 'islamic-financial-products',
        name: 'Islamic Financial Products'
    },
    {
        id: 'monthly-savings',
        name: 'Monthly Savings'
    },
    {
        id: 'credit-facilities',
        name: 'Credit Facilities'
    },
];

export const contactInfo = [
    {
        id: 'address',
        icon: <FaMapMarkerAlt />,
        info: '73, Rijiyar Zaki Kudu Ibrahim Khalil Street, Gwarzo Road Kano.',
    },
    {
        id: 'phone',
        icon: <FaPhoneAlt />,
        info: '07032317688 | 08060340986',
    },
    {
        id: 'email',
        icon: <FaEnvelope /> ,
        info: 'grtpristinemulticoopsltd@gmail.com',
    },
    {
        id: 'website',
        icon: <FaGlobe />,
        info: 'www.grtpristine.com',
    },
];