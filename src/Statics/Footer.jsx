import logo from"../assets/logo.png";
function Footer() {
  return (
    <footer className="bg-gray-100 mt-10 px-8 py-10">
      <div className="max-w-6xl mx-auto">

        {/* Footer top */}
        <div className="flex flex-wrap justify-between gap-8">

          {/* Logo / Description */}
          <div>
            <div className="">
                      <img
                        src={logo}
                        className="max-w-[30px]min-h-[20px]max-lg: max-w-[120px]min-h-[40px]"
                      />
                    </div>

            <p className="text-gray-600 mt-2 max-w-xs">
              Manage your tasks, stay organized, and get things done with PadiPal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              <a href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </a>

              <a href="/about" className="text-gray-600 hover:text-gray-900">
                About Us
              </a>

              <a href="/tasks" className="text-gray-600 hover:text-gray-900">
                Tasks Board
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">
              Follow Us
            </h3>

            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Facebook
              </a>

              <a href="#" className="text-gray-600 hover:text-gray-900">
                Instagram
              </a>

              <a href="#" className="text-gray-600 hover:text-gray-900">
                X
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-300 mt-8 pt-5 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 PadiPal. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;