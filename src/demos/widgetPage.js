import {
  MdThumbUp,
  MdThumbsUpDown,
  MdLanguage,
  MdLightbulbOutline,
  MdPlayCircleOutline,
  MdRadio,
  MdSnooze,
  MdMailOutline,
} from 'react-icons/lib/md';

export const iconWidgetsData = [
  {
    bgColor: 'primary',
    icon: MdThumbUp,
    title: 'Primary',
    subtitle: 'widget subtitle',
  },
  {
    bgColor: 'secondary',
    icon: MdThumbsUpDown,
    title: 'Secondary',
    subtitle: 'widget subtitle',
  },
  {
    bgColor: 'success',
    icon: MdLanguage,
    title: 'Success',
    subtitle: 'widget subtitle',
  },
  {
    bgColor: 'danger',
    icon: MdLightbulbOutline,
    title: 'Danger',
    subtitle: 'widget subtitle',
  },
  {
    bgColor: 'warning',
    icon: MdPlayCircleOutline,
    title: 'Warning',
    subtitle: 'widget subtitle',
  },
  {
    bgColor: 'info',
    icon: MdRadio,
    title: 'Info',
    subtitle: 'widget subtitle',
  },
  {
    bgColor: 'light',
    icon: MdSnooze,
    title: 'Light',
    subtitle: 'widget subtitle',
    inverse: false,
  },
  {
    bgColor: 'dark',
    icon: MdMailOutline,
    title: 'Dark',
    subtitle: 'widget subtitle',
  },
];

export const numberWidgetsData = [
  { color: 'primary' },
  { color: 'secondary' },
  { color: 'success' },
  { color: 'info' },
  { color: 'warning' },
  { color: 'danger' },
  { color: 'light' },
  { color: 'dark' },
];
