import {
  ShoppingOutlined,
  ShopOutlined,
  DashboardOutlined,
  FileImageOutlined,
  GiftOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  ShoppingCartOutlined,
  BookOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

const mainNavTree = [
  {
    key: 'main',
    path: `${APP_PREFIX_PATH}/main`,
    title: 'Основные',
    icon: DashboardOutlined,
    breadcrumb: false,
    isGroupTitle: true,
    submenu: [
      {
        key: 'main-dashboard',
        path: `${APP_PREFIX_PATH}/main/dashboard`,
        title: 'Дашборд',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'main-catalog',
        path: `${APP_PREFIX_PATH}/main/catalog`,
        title: 'Каталог',
        icon: ShoppingCartOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'main-catalog-goods',
            path: `${APP_PREFIX_PATH}/main/catalog/goods`,
            title: 'Товары',
            icon: '',
            breadcrumb: true,
            submenu: [],
          },
          {
            key: 'main-catalog-categories',
            path: `${APP_PREFIX_PATH}/main/catalog/categories`,
            title: 'Категории',
            icon: '',
            breadcrumb: true,
            submenu: [],
          },
          {
            key: 'main-catalog-collections',
            path: `${APP_PREFIX_PATH}/main/catalog/collections`,
            title: 'Коллекции',
            icon: '',
            breadcrumb: true,
            submenu: [],
          },
          {
            key: 'main-catalog-combos',
            path: `${APP_PREFIX_PATH}/main/catalog/combos`,
            title: 'Комбо',
            icon: '',
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: 'main-orders',
        path: `${APP_PREFIX_PATH}/main/orders`,
        title: 'Заказы',
        icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'main-clients',
        path: `${APP_PREFIX_PATH}/main/clients`,
        title: 'Клиенты',
        icon: UserOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'main-clients-list',
            path: `${APP_PREFIX_PATH}/pages/user-list`,
            title: 'Список клиентов',
            icon: '',
            breadcrumb: true,
            submenu: [],
          },
          {
            key: 'main-clients-groups',
            path: `${APP_PREFIX_PATH}/main/clients/groups`,
            title: 'Группы клиентов',
            icon: '',
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: 'main-banners',
        path: `${APP_PREFIX_PATH}/main/banners`,
        title: 'Баннеры',
        icon: FileImageOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'main-promos',
        path: `${APP_PREFIX_PATH}/main/promos`,
        title: 'Промокоды',
        icon: GiftOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'main-offline',
        path: `${APP_PREFIX_PATH}/main/offline`,
        title: 'Оффлайн точки',
        icon: ShopOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'main-offline-addresses',
            path: `${APP_PREFIX_PATH}/main/offline/addresses`,
            title: 'Адреса',
            icon: '',
            breadcrumb: true,
            submenu: [],
          },
          {
            key: 'main-offline-geozones',
            path: `${APP_PREFIX_PATH}/main/offline/geozones`,
            title: 'Геозоны',
            icon: '',
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: 'main-staff',
        path: `${APP_PREFIX_PATH}/main/staff`,
        title: 'Сотрудники',
        icon: UsergroupAddOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'main-subs',
        path: `${APP_PREFIX_PATH}/main/subs`,
        title: 'Рассылки',
        icon: MailOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const systemsNavTree = [
  {
    key: 'systems',
    path: `${APP_PREFIX_PATH}/systems`,
    title: 'Системные',
    icon: BookOutlined,
    breadcrumb: false,
    isGroupTitle: true,
    submenu: [
      {
        key: 'systems-settings',
        path: `${APP_PREFIX_PATH}/systems/settings`,
        title: 'Настройки',
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'systems-mobile-app',
        path: `${APP_PREFIX_PATH}/systems/mobile-app`,
        title: 'Мобильное приложение',
        icon: MobileOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'systems-logs',
        path: `${APP_PREFIX_PATH}/systems/logs`,
        title: 'Логи',
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...mainNavTree, ...systemsNavTree];

export default navigationConfig;
