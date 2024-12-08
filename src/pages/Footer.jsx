import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-purple-600 text-white py-6">
    <div class="container mx-auto ">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    
    
      
        <div>
          <h3 class="text-xl font-semibold mb-2">Contact Us</h3>
          <ul>
            <li class="text-sm"><strong>Phone:</strong> +123 456 7890</li>
            <li class="text-sm"><strong>Email:</strong> contact@pregnancysystem.com</li>
            <li class="text-sm"><strong>Address:</strong> 123 Care Avenue, Health City, HC 56789</li>
          </ul>
        </div>
       
        <div>
          <h3 class="text-xl font-semibold mb-2">Follow Us</h3>
          <ul class="flex space-x-4">
            <li>
              <a href="#" class="text-blue-400 hover:text-blue-600">Facebook</a>
            </li>
            <li>
              <a href="#" class="text-blue-400 hover:text-blue-600">Twitter</a>
            </li>
            <li>
              <a href="#" class="text-blue-400 hover:text-blue-600">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-1 text-center text-sm pt-4">
        &copy; 2024 Pregnancy System. All rights reserved.
      </div>
    </div>
  </footer>
  
  )
}

export default Footer