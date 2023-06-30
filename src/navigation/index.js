const menuNavigation = () => {
    return [
      {
        title: 'Dashboard',
        icon: HomeOutline,
        path: '/'
      },
      {
        title: 'Configuración',
        icon: AccountCogOutline,
        path: '/account-settings'
      },
      {
        sectionTitle: 'Inventario'
      },
      {
        title: 'Login',
        icon: Login,
        path: '/pages/login',
        openInNewTab: true
      },
      {
        title: 'Register',
        icon: AccountPlusOutline,
        path: '/pages/register',
        openInNewTab: true
      },
      {
        title: 'Error',
        icon: AlertCircleOutline,
        path: '/pages/error',
        openInNewTab: true
      },
      {
        sectionTitle: 'Almacen'
      },
      {
        title: 'Typography',
        icon: FormatLetterCase,
        path: '/typography'
      },
      {
        title: 'Icons',
        path: '/icons',
        icon: GoogleCirclesExtended
      },
      {
        title: 'Cards',
        icon: CreditCardOutline,
        path: '/cards'
      },
      {
        title: 'Tables',
        icon: Table,
        path: '/tables'
      },
      {
        icon: CubeOutline,
        title: 'Form Layouts',
        path: '/form-layouts'
      }
    ]
  }
  
  export default menuNavigation
  