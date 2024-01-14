const projects = [
  {
    id: 1,
    url: 'Shelflive',
    banner: '/projects/e-shop/banner.png',
    img: '/projects/e-shop/shelflive-page.png',
    title: 'Shelflive',
    type: 'Desktop Application',
    icon: '/projects/e-shop/shelflive-logo.png',
    github: 'https://github.com/EvanderInacio/E-Shop',
    web: 'https://ecommerce-e-shop.vercel.app/',
    description:
      'ShelfLive is a powerful desktop application designed to elevate laboratory inventory management. Developed using React for the user interface, JavaScript for logic, MongoDB for data storage, and the Electron framework for cross-platform compatibility, ShelfLive empowers laboratories to efficiently track, manage, and optimize their inventory processes.',
    tags: [
      {
        name: 'React',
        icon: '/skills/react.svg',
        color: '#FFFFFF',
        rgb: '255, 255, 255'
      },
      {
        name: 'Javascript',
        icon: '/skills/javascript.svg',
        color: '#3178C6',
        rgb: '49, 120, 198'
      },
      {
        name: 'Electron',
        icon: '/skills/tailwindcss.svg',
        color: '#38BDF8',
        rgb: '56, 189, 248'
      },
      {
        name: 'Mongo DB',
        icon: '/skills/mongodb.svg',
        color: '#635BFF',
        rgb: '99, 91, 255'
      },
    ],
    print: [
      {
        name: 'Home',
        description:
          'Homepage do site com um banner em forma de sliders que mostra os destaques de produtos existentes na loja. Cada slide destaca as características distintas de cada produto.',
        img: '/projects/e-shop/home.png'
      },
      {
        name: 'Lista de Produtos',
        description:
          'Homepage do site, onde são exibidos todos os produtos da loja. Explorando uma ampla gama de produtos que atendem a diversos gostos e necessidades.',
        img: '/projects/e-shop/home-products.png'
      },
      {
        name: 'Produto Detalhes',
        description:
          'Página de detalhes de um produto, contendo uma descrição do produto, assim como o seu preço e um imagem ilustrativa. Botão de adicionar aos favoritos ou ao carrinho.',
        img: '/projects/e-shop/details.png'
      },
      {
        name: 'Favoritos',
        description:
          'Página de Favoritos, o seu próprio santuário de desejos! Aqui, você tem a oportunidade de manter um registro dos produtos que capturaram o seu coração.',
        img: '/projects/e-shop/favorite.png'
      },
      {
        name: 'Carrinho',
        description:
          'Página do carrinho. Aqui você tem a opção de adicionar a quantidade específica de produtos que deseja, assim como visualizar todos os produtos adicionados ao carrinho e a soma dos valores de todos os produtos.',
        img: '/projects/e-shop/cart.png'
      },
      {
        name: 'Checkout',
        description:
          'Página com o formulário de pagamentos da plataforma stripe.',
        img: '/projects/e-shop/stripe.png'
      },
      {
        name: 'Sucesso',
        description: 'Página de sucesso, mostra as imagens dos produtos que a pessoa compro assim como o nome dela e a quantidade de produtos comprados.',
        img: '/projects/e-shop/success.png'
      },
    ],
    status: 'Completo',
    year: '2023',
    gif: '/projects/e-shop/e-shop.mp4',
    backgroundImage: '/projects/e-shop/home.png',
    video:
      'https://www.youtube.com/watch?v=xotEZglo6l8&ab_channel=EvanderIn%C3%A1cio'
  },

  {
    id: 2,
    url: 'easyledger',
    banner: '/projects/whatsapp/chat-emoji.png',
    img: '/projects/whatsapp/login.png',
    title: 'Easy Ledger',
    type: 'Website',
    icon: '/projects/whatsapp/icon.svg',
    github: 'https://github.com/DamiAdeeso/Easy-Ledger',
    web: 'https://easy-ledger.vercel.app/',
    description:
      'Clone do WhatsApp web, usando ReactJs e Styled Components para fazer a estilização e o firebase e suas funcionalidades como o AUTH para autenticação de usuários e FIRESTORE para armazenar as conversas de cada pessoa cadastrada.  Com a opção de dark mode para alterar o tema e assim ficar com uma interface agradável.',
    tags: [
      {
        name: 'React Js',
        icon: '/skills/react.svg',
        color: '#61DAFB',
        rgb: '97, 218, 251'
      },
      {
        name: 'JavaScript',
        icon: '/skills/javascript.svg',
        color: '#F7DF1E',
        rgb: '247, 223, 30'
      },
      {
        name: 'Express.js',
        icon: '/skills/express.svg',
        color: '#C476AE',
        rgb: '196, 118, 174'
      },
      {
        name: 'Node.js',
        icon: '/skills/nodejs.svg',
        color: '#FFCA28',
        rgb: '255, 202, 40'
      }
    ],
    print: [
      {
        name: 'Login',
        description:
          'Página de login com a opção de conectar pelo google ou pelo github.',
        img: '/projects/whatsapp/login.png'
      },
      {
        name: 'Home Light',
        description:
          'Página de início, após o usuário se autenticar, onde exibe uma mensagem de Boas-vindas, e no canto esquerdo uma lista de contatos.',
        img: '/projects/whatsapp/home-light.png'
      },
      {
        name: 'Home Dark',
        description: 'Página inicial em sua versão dark mode.',
        img: '/projects/whatsapp/home-dark.png'
      },
      {
        name: 'Chat',
        description:
          'Página de chat exibe a informações de um chat especifico mostrando as mensagens enviadas por você e aquelas respondidas pelo outro contato.',
        img: '/projects/whatsapp/chat.png'
      },
      {
        name: 'Chat Emoji',
        description: 'Opção de escolher um emoji.',
        img: '/projects/whatsapp/chat-emoji.png'
      },
      {
        name: 'Novo Chat',
        description: 'Aba com uma lista contendo a opção de escolha de um novo chat.',
        img: '/projects/whatsapp/new-chat.png'
      }
    ],
    status: 'Completo',
    year: '2022',
    gif: '/projects/whatsapp/whatsapp.mp4',
    backgroundImage: '/projects/whatsapp/home-dark.png',
    video:
      'https://www.youtube.com/watch?v=PZpp2sCm0zY&t=11s&ab_channel=EvanderIn%C3%A1cio'
  },

  
]

export default projects
