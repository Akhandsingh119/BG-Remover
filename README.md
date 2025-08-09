<p align="center">
  <img src="Frontend/public/clie/Logo.svg" alt="BG Remover Logo" width="120" />
</p>

<h1 align="center"> BG Remover - AI-Powered Background Removal Tool</h1>

A full-stack web application that automatically removes backgrounds from images using AI technology. Built with React frontend and Node.js backend, featuring user authentication, credit-based processing, and seamless image processing.

## 📸 Screenshots
<p align="center">
  <img src="Frontend\public\clie\Landingpage.png" alt="Sample 1" width="450" />
  <img src="Frontend\public\clie\Login.png" alt="Sample 2" width="450" />
   <img src="Frontend\public\clie\credit.png" alt="Sample 1" width="450" />
  <img src="Frontend\public\clie\Landingpage.png" alt="Sample 2" width="450" />
</p>

## 🌟 Features

- **AI-Powered Background Removal**: Uses ClipDrop API for high-quality background removal
- **User Authentication**: Secure user management with Clerk authentication
- **Credit System**: Pay-per-use model with credit balance management
- **Real-time Processing**: Fast image processing with immediate results
- **Responsive Design**: Modern, mobile-friendly UI with smooth animations
- **Payment Integration**: Razorpay integration for credit purchases
- **File Upload**: Support for various image formats with drag-and-drop
- **Download Results**: Easy download of processed images

## 🏗️ Project Structure

```
BG Remover/
├── Backend/                    # Node.js Express Server
│   ├── config/                # Configuration files
│   │   └── mongodb.js        # MongoDB connection setup
│   ├── Controler/            # Business logic controllers
│   │   ├── control.js        # User management controller
│   │   └── Imagecontroller.js # Image processing controller
│   ├── middleware/            # Express middleware
│   │   ├── auth.js           # Authentication middleware
│   │   └── multer.js         # File upload middleware
│   ├── models/                # MongoDB data models
│   │   ├── transactionModel.js # Payment transaction model
│   │   └── userModels.js     # User data model
│   ├── Routes/                # API route definitions
│   │   ├── imagerout.js      # Image processing routes
│   │   └── userRoutes.js     # User management routes
│   ├── server.js             # Main server file
│   └── package.json          # Backend dependencies
│
├── Frontend/                   # React Application
│   ├── src/
│   │   ├── assets/           # Static assets (images, icons)
│   │   ├── bg/               # Background components
│   │   │   ├── CircularGallery/
│   │   │   ├── Particles/
│   │   │   ├── SpotlightCard/
│   │   │   └── TextType/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── Bgslider.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Middle.jsx
│   │   │   └── Navbar.jsx
│   │   ├── Pages/            # Main application pages
│   │   │   ├── AppContext.jsx
│   │   │   ├── BuyCredit.jsx
│   │   │   ├── Home.jsx
│   │   │   └── Result.jsx
│   │   ├── ui/               # UI utility components
│   │   │   ├── Circle.jsx
│   │   │   └── Cursor.jsx
│   │   ├── App.jsx           # Main application component
│   │   ├── main.jsx          # Application entry point
│   │   └── index.css         # Global styles
│   ├── public/               # Public assets
│   │   ├── clie/            # Client assets
│   │   └── fonts/           # Custom fonts (Gilroy family)
│   ├── package.json          # Frontend dependencies
│   └── vite.config.js        # Vite build configuration
```

## 🚀 Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **GSAP** - Advanced animation library
- **Locomotive Scroll** - Smooth scrolling
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **React Toastify** - Toast notifications
- **Chakra UI** - Component library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Multer** - File upload middleware
- **JWT** - JSON Web Token authentication
- **CORS** - Cross-origin resource sharing
- **Razorpay** - Payment gateway integration
- **ClipDrop API** - AI background removal service

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **MongoDB** database (local or cloud)
- **ClipDrop API** key
- **Clerk** authentication account
- **Razorpay** merchant account

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd BG-Remover
```

### 2. Backend Setup
```bash
cd Backend
npm install

# Create .env file
cp .env.example .env
```

Configure your `.env` file:
```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
CLIPDROP_API=your_clipdrop_api_key
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
CLERK_SECRET_KEY=your_clerk_secret_key
```

### 3. Frontend Setup
```bash
cd Frontend
npm install

# Create .env file
cp .env.example .env
```

Configure your `.env` file:
```env
VITE_API_URL=http://localhost:4000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### 4. Start Development Servers

**Backend:**
```bash
cd Backend
npm run server
```

**Frontend:**
```bash
cd Frontend
npm run dev
```

## 🔧 Configuration

### MongoDB Setup
1. Create a MongoDB database (local or MongoDB Atlas)
2. Update the connection string in `Backend/config/mongodb.js`
3. Ensure the database is accessible from your application

### Clerk Authentication
1. Create a Clerk account at [clerk.com](https://clerk.com)
2. Set up your application
3. Configure authentication methods
4. Add your publishable and secret keys to environment variables

### ClipDrop API
1. Sign up at [clipdrop.co](https://clipdrop.co)
2. Get your API key
3. Add it to your backend environment variables

### Razorpay Integration
1. Create a Razorpay merchant account
2. Get your key ID and secret
3. Configure webhook endpoints
4. Add credentials to environment variables

## 📱 Usage

### 1. User Registration/Login
- Users can sign up or log in using Clerk authentication
- Supports multiple authentication methods (email, social login)

### 2. Credit Purchase
- Users can buy credits through the integrated payment system
- Credits are consumed for each background removal operation

### 3. Image Processing
1. Upload an image (drag & drop or file picker)
2. Click "Remove Background"
3. Wait for AI processing
4. Download the result

### 4. Credit Management
- View current credit balance
- Purchase additional credits as needed
- Track usage history

## 🔌 API Endpoints

### User Routes (`/api/user`)
- `POST /register` - User registration
- `POST /login` - User authentication
- `GET /profile` - Get user profile
- `PUT /profile` - Update user profile
- `POST /buy-credits` - Purchase credits

### Image Routes (`/api/image`)
- `POST /remove-bg` - Remove image background
- `GET /history` - Get processing history
- `DELETE /image/:id` - Delete processed image

## 🎨 UI Components

### Background Effects
- **Particles**: Animated particle system
- **Circular Gallery**: Rotating image gallery
- **Spotlight Card**: Interactive card with spotlight effect
- **Text Type**: Animated text typing effect

### Interactive Elements
- **Custom Cursor**: Personalized cursor animations
- **Smooth Scrolling**: Locomotive scroll implementation
- **Responsive Design**: Mobile-first approach
- **Modern Animations**: GSAP and Framer Motion

## 🚀 Deployment

### Vercel Deployment
Both frontend and backend include `vercel.json` for easy deployment:

```bash
# Deploy to Vercel
vercel --prod
```

### Environment Variables
Ensure all environment variables are set in your deployment platform:
- MongoDB connection string
- API keys
- JWT secrets
- Payment gateway credentials

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **CORS Protection**: Cross-origin request handling
- **File Upload Validation**: Secure file handling
- **Rate Limiting**: API usage restrictions
- **Input Sanitization**: XSS and injection protection

## 📊 Performance Features

- **Image Optimization**: Efficient image processing
- **Lazy Loading**: Optimized component loading
- **Code Splitting**: Bundle optimization
- **CDN Integration**: Fast asset delivery
- **Caching**: Browser and server-side caching

## 🧪 Testing

```bash
# Frontend testing
cd Frontend
npm run test

# Backend testing
cd Backend
npm test
```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🤝 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔮 Future Enhancements

- [ ] Batch image processing
- [ ] Advanced editing tools
- [ ] Social media integration
- [ ] Mobile app development
- [ ] AI-powered image enhancement
- [ ] Cloud storage integration
- [ ] Team collaboration features

## 📈 Project Status

- ✅ Core functionality implemented
- ✅ User authentication system
- ✅ Payment integration
- ✅ AI background removal
- ✅ Responsive UI design
- 🔄 Performance optimization
- 🔄 Advanced features
- 🔄 Testing coverage

## 📄 License

This project is licensed under the MIT License.

**Built with ❤️ using modern web technologies**
