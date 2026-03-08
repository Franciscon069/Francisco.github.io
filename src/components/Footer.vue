<template>
  <footer class="bg-card text-text py-10 mt-20">

    <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

      <!-- Información -->
      <div>
        <h3 class="text-xl font-semibold mb-3">
          Francisco Hermosillo
        </h3>

        <p class="text-muted text-sm">
          Desarrollador Web Full-Stack enfocado en la creación de
          aplicaciones web modernas y sistemas de gestión.
        </p>
      </div>

      <!-- Navegación -->
      <div>
        <h4 class="font-semibold mb-3">Enlaces</h4>

        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:text-accent">Inicio</a></li>
          <li><a href="#about" class="hover:text-accent">Sobre mí</a></li>
          <li><a href="#projects" class="hover:text-accent">Proyectos</a></li>
          <li><a href="#contact" class="hover:text-accent">Contacto</a></li>
        </ul>
      </div>

      <!-- Contacto -->
      <div>
        <h4 class="font-semibold mb-3">Contacto</h4>

        <ul class="space-y-2 text-sm">
          <li>📧 jvasillo300@gmail.com</li>
          <li>📱 449 550 2032</li>
          <li>
            💻
            <a href="#" class="hover:text-accent">
              GitHub
            </a>
          </li>
        </ul>
      </div>

    </div>

    <!-- Línea inferior -->
    <div class="border-t mt-8 pt-4 text-center text-sm text-muted">
      © {{ new Date().getFullYear() }} Francisco Hermosillo.
      Todos los derechos reservados.
    </div>

  </footer>
</template>