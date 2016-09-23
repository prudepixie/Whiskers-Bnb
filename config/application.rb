require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module WhiskersBnb
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- ao09nv,ll .rb files in that directory are automatically loaded.
    config.assets.paths << Rails.root.join('node_modules')
    config.browserify_rails.commandline_options = "-t reactify --extension=\".js.jsx\""
  end
end
