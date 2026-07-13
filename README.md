# Talento Tech Nexus - E-commerce React JS

E-commerce desarrollado con **React + Vite** como proyecto final para Talento Tech.

La aplicación representa una tienda digital de productos tecnológicos, incorporando autenticación de usuarios mediante Firebase, rutas protegidas, gestión administrativa de productos y cupones, carrito de compras y funcionalidades de usuario como favoritos.

🌐 **Demo Online**

🔗 https://talento-tech-react-js-china.netlify.app/

---

# 🔐 Acceso al sistema

La aplicación cuenta con autenticación mediante **Firebase Authentication**.

## Usuario administrador

Para acceder al panel administrativo utilizar:

```
Email:
admin@gmail.com

Password:
admin1234
```

El usuario administrador cuenta con permisos para acceder a las secciones protegidas de gestión.

> Las credenciales de administrador están disponibles únicamente para fines de evaluación académica.

---

# 👤 Registro de usuarios

Los usuarios pueden crear su propia cuenta mediante el formulario de registro.

El sistema permite:

- Registro de nuevos usuarios
- Inicio de sesión
- Cierre de sesión
- Persistencia de sesión mediante Firebase
- Protección de rutas según autenticación

---

# 📦 Funcionalidades principales

## 🛒 Catálogo de productos

La aplicación cuenta con un catálogo dinámico de productos tecnológicos.

Incluye:

- Listado de productos
- Vista de detalle individual
- Filtrado por categorías
- Productos destacados
- Información detallada de cada producto
- Diseño responsive

---

## ⭐ Sistema de favoritos

Los usuarios pueden:

- Agregar productos a favoritos
- Quitar productos de favoritos
- Visualizar productos seleccionados

El estado de favoritos se administra mediante **React Context API**.

---

## 🛍️ Carrito de compras

Funcionalidades implementadas:

- Agregar productos al carrito
- Modificar cantidades
- Eliminar productos individuales
- Vaciar carrito completo
- Cálculo automático del total
- Manejo del estado mediante Context API

---

# 🛠️ Panel administrativo

La aplicación cuenta con rutas protegidas para administración.

El acceso está restringido únicamente a usuarios autenticados.

---

## Gestión de productos (CRUD)

Permite:

✅ Crear productos  
✅ Consultar productos desde Firebase Firestore  
✅ Editar productos existentes  
✅ Eliminar productos  

---

## Gestión de cupones (CRUD)

Permite:

✅ Crear cupones de descuento  
✅ Visualizar cupones disponibles  
✅ Editar cupones  
✅ Eliminar cupones  

---

# 🔒 Rutas protegidas

La aplicación implementa protección de rutas mediante autenticación.

Las secciones administrativas solamente están disponibles para usuarios autenticados.

Tecnologías utilizadas:

- Firebase Authentication
- React Context API
- Protected Routes
- React Router DOM

---

# 🔥 Firebase

La aplicación utiliza Firebase como backend:

- **Firebase Authentication** para gestión de usuarios
- **Firebase Firestore** como base de datos NoSQL
- Persistencia de productos
- Persistencia de cupones
- Gestión de usuarios autenticados

---

# ⚙️ Características técnicas

- Arquitectura basada en componentes reutilizables
- Manejo de estado global mediante Context API
- Navegación SPA con React Router DOM
- Rutas protegidas mediante autenticación
- Integración con Firebase
- Operaciones CRUD completas
- Diseño modular utilizando CSS Modules
- Aplicación responsive

---

# 🛠️ Tecnologías utilizadas

- React JS
- Vite
- JavaScript ES6+
- React Router DOM
- Firebase Authentication
- Firebase Firestore
- Context API
- CSS Modules
- Git
- GitHub
- Netlify

---

# 📁 Estructura del proyecto

```text
src/
│
├── components/
│   │
│   ├── Layout/
│   │   ├── Header/
│   │   └── Footer/
│   │
│   ├── Productos/
│   │   ├── Item/
│   │   ├── ItemDetalle/
│   │   └── Contador/
│   │
│   ├── Cart/
│   │
│   ├── Login/
│   │
│   ├── Registro/
│   │
│   ├── GestionProductos/
│   │
│   ├── GestionCupones/
│   │
│   └── ProtectedRoute/
│
├── context/
│   ├── CartContext.jsx
│   └── AuthContext.jsx
│
├── firebase/
│   └── config.js
│
├── App.jsx
└── main.jsx
```

---

# 📚 Requerimientos implementados

✅ Aplicación SPA desarrollada con React  
✅ Componentización reutilizable  
✅ Navegación con React Router DOM  
✅ Catálogo dinámico de productos  
✅ Vista detalle por ID  
✅ Sistema de favoritos  
✅ Carrito de compras funcional  
✅ Gestión de estado mediante Context API  
✅ Firebase Authentication  
✅ Firebase Firestore  
✅ Registro e inicio de sesión de usuarios  
✅ Rutas protegidas  
✅ CRUD completo de productos  
✅ CRUD completo de cupones  
✅ Diseño responsive  
✅ Deploy online mediante Netlify  

---

# 🚀 Instalación local

Clonar repositorio:

```bash
git clone https://github.com/Chinapaoletti/talento-tech-react-js.git
```

Ingresar al proyecto:

```bash
cd talento-tech-react-js
```

Instalar dependencias:

```bash
npm install
```

Ejecutar entorno de desarrollo:

```bash
npm run dev
```

---

# 👩‍💻 Proyecto académico

Proyecto realizado como entrega final del curso **Talento Tech React JS**.

El objetivo fue desarrollar una aplicación e-commerce completa aplicando conceptos de React, manejo de estado, routing, autenticación, persistencia de datos y operaciones CRUD utilizando Firebase como backend.
