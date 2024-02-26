import img from "../assets/images/LogoPetfinder.svg";
import icon from "../assets/images/ForwardIcon.svg";
import hearticon from "../assets/images/IconFavoriteHeart.svg";
import hearticonMobile from "../assets/images/icon-favoriteHeart-Mobile.svg";
import toggler from "../assets/images/togler.svg";
import image from "../assets/images/heroIcons/MainSectionBgImg.png";
import searchIcon from "../assets/images/heroIcons/IconSearchBackground.svg";
import img1 from "../assets/images/heroIcons/Dog.svg";
import img2 from "../assets/images/heroIcons/IconCatPortrait.svg";
import img3 from "../assets/images/heroIcons/IconPawOutline.svg";
import img4 from "../assets/images/heroIcons/IconSheltersRescues.svg";
import FaviorteHeart from "../assets/images/detailedPageImg/icon-favorite-heart.svg";
import PawHand from "../assets/images/detailedPageImg/paw-on-hand.svg";
import LocationIcon from "../assets/images/detailedPageImg/icon-location.svg";
import PhoneIcon from "../assets/images/detailedPageImg/icon-phone.svg";
import alternative from "../assets/images/petCardImages/IconLogofaceColorGray.svg";
import AlertImg from "../assets/images/detailedPageImg/icon-alert.svg";
import newAdopt from "../assets/images/heroIcons/IconSheltersRescues.svg";
import plandogimg from "../assets/images/heroIcons/Dog.svg";
import planheartimg from "../assets/images/heroIcons/Health.svg";
import feedback from "../assets/images/Feedback.png";
import dogMainImg from "../assets/images/articalSectionImg/ArticalMainImage.png";
import dogDpImg from "../assets/images/articalSectionImg/DogimageSmall.png";
import kittenMainImg from "../assets/images/articalSectionImg/kittenMainImage.png";
import kittenImg from "../assets/images/articalSectionImg/kittenSmall.png";
import iconFavorite2 from "../assets/images/petCardImages/IconFavorite.svg";
import alternate from "../assets/images/petCardImages/IconLogofaceColorGray.svg";
import Forwardicon from "../assets/images/petCardImages/IconRightArrow.svg";
import FooterLogo from "../assets/images/footerImages/purinaLogo.svg";
import Logo from "../assets/images/footerImages/PetfinderLogo.svg";
import Facebook from "../assets/images/footerImages/FacebookLogo.svg";
import Insta from "../assets/images/footerImages/InstagramLogo.svg";
import Twitter from "../assets/images/footerImages/TwitterLogo.svg";
import Pintrest from "../assets/images/footerImages/PinterestLogo.svg";
import YouTube from "../assets/images/footerImages/YouTubeLogo.svg";
import arrowWhite from "../assets/images/footerImages/DownwardArrow.svg";

export {
  img,
  icon,
  hearticon,
  hearticonMobile,
  toggler,
  image,
  img1,
  img2,
  img3,
  img4,
  searchIcon,
  FaviorteHeart,
  PawHand,
  LocationIcon,
  PhoneIcon,
  alternative,
  AlertImg,
  newAdopt,
  plandogimg,
  planheartimg,
  feedback,
  dogMainImg,
  dogDpImg,
  kittenImg,
  kittenMainImg,
  iconFavorite2,
  alternate,
  Forwardicon,
  FooterLogo,
  Logo,
  Facebook,
  Insta,
  Twitter,
  Pintrest,
  YouTube,
  arrowWhite,
};

export type Photos = {
  small: string;
  medium: string;
  large: string;
  full: string;
};
export type Address = {
  address1: string | null;
  address2: string | null;
  city: string;
  country: string;
  postcode: number;
  state: string;
};
export type Contact = {
  email: string;
  phone: number;
  address: Address;
};
export type Colors = {
  primary: string;
  secondary: string;
  tertiary: string;
};
export type Breeds = {
  mixed: boolean;
  primary: string;
  secondary: string;
  unknown: boolean;
};

export type animal = {
  age: string;
  gender: string;
  name: string;
  description: string | null;
  contact: Contact | null;
  photos: Photos[];
  status: string;
  species: string;
  size: string;
  type: string;
  colors: Colors[];
  coat: string;
  breeds: Breeds | null;
  organization_id: string;
  url: string;
};
export interface GetPetState {
  animal: animal | null;
  loading: boolean;
  error: string | null;
}
export type organization = {
  organization_id: string;
  id: string;
  name: string;
  photos: Photos[];
  organization: string;
  description: string;
};
export interface GetOrganizationState {
  organization: organization[] | null;
  loading: boolean;
  error: string | null;
}

export interface Response {
  name: string;
  image_url: string;
  age: string;
  id: number;
  animalId: [];
  photos: Photos[] | [];
}

export interface CounterState {
  data: petData[] | null;
  loading: boolean;
  error: string | null;
}
export interface petData {
  age: string;
  gender: string;
  name: string;
  description: string;
  contact: Contact[] | [];
  photos: Photos[] | [];
  status: string;
  species: string;
  size: string;
  type: string;
  colors: Colors[] | [];
  coat: string;
  breeds: Breeds[] | [];
  organization_id: string;
  url: string;
  image_url: string;
  id: number;
  animalId: [];
}
export const navlink_1st = [
  "FAQs",
  "Mobile App Download",
  "Partnerships",
  "News Center",
  "Put Petfinder On Your Site",
  "For Developers",
  "Contact Us",
];
export const navlink_2nd = [
  "All Adopt or Get Involved",
  " Adopting Pets",
  " Animal Shelters & Rescues",
  "Other Types of Pets",
];
export const navlink_3rd = [
  "All About Dogs & Puppies",
  "Dog Adoption",
  "Dog Breeds",
  " Feeding Your Dog",
  "Dog Behavior",
  " Dog Health & Wellness",
  "Dog Training",
  "Other Dog Information",
];
export const navlink_4th = [
  "All About Cats & Kittens",
  "Cat Adoption",
  "Cat Breeds",
  " Feeding Your Cat",
  "Cat Behavior",
  " Cat Health & Wellness",
  "Cat Training",
  "Other Cat Information",
];
export const footLinks = [
  "Shelter & Rescue Registration",
  "Sitemap",
  "Terms of Service",
  "Notice at Collection",
  "Privacy Policy ( updated )",
  "Do Not Sell Or Share My Personal Information",
  "Accessibility",
  "About Our Ads",
];
export const navoptions = [
  "Adopt or Get Involved",
  "Dogs & Puppies",
  "Cats & Kittens",
  "Other Types of Pets",
];
