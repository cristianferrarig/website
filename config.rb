activate :autoprefixer
activate :i18n
activate :directory_indexes
activate :syntax, :line_numbers => true

ready do
  sprockets.append_path 'vendor/assets'
  sprockets.append_path File.join root, 'vendor/bower'
end

set :source,       "source"
set :build_dir,    "build"

set :layouts_dir,  "layouts"
set :partials_dir, "partials"

set :assets_dir,   "assets"

# relative to source
set :css_dir,      "assets/stylesheets"
set :js_dir,       "assets/javascripts"
set :images_dir,   "assets/images"
set :fonts_dir,    "assets/fonts"

configure :development do
  activate :livereload
  set :debug_assets, true
end

configure :build do
  # activate :imageoptim
  activate :minify_css
  activate :minify_javascript
  activate :cache_buster
  # activate :asset_hash
  # activate :relative_assets
  # set :relative_links, false
end

activate :deploy do |deploy|
  deploy.method = :git
  deploy.build_before = true
end
