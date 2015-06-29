Bourbon
Bootstrap
Foundation
Ratchet



tools
base
utilities
components
layouts
patterns




frame
play
sand
docs


tools





background:  #333333
light-color: white
dark-color:  black


// Lets make a simple image magnifier
.magnify
  // This is the magnifying glass which will contain the original/large version
  .large
    .caption #86008F

  // This is the small image
  %img.small{src: "http://significadodeloscolores.info/wp-content/uploads/2014/08/color-violeta.png", width: "800"}


/
  .followpointer
    .followpointer-content
      %h2 Tones
      %p Easily make use of two color schemes

    .followpointer-area
      - 25.times do
        %p asdasdasd





%div{style: "display: none;"}
  %strong page_classes<br/>
  = page_classes
  <br/>
  %strong current_page.data<br/>
  = current_page.data
  <br/>
  %strong current_page.path<br/>
  = current_page.path
  <br/>
  %strong current_page.url<br/>
  = current_page.url
  <br/>
  %strong current_page.source_file<br/>
  = current_page.source_file
  <br/>
  %strong request.path<br/>
  = request.path







.docs-page
  %header.docs-header
    .brand.horizontal-solid-3 PREY
    %nav.docs-nav
      %ul.docs-menu
        %li= link_to 'Getting started', '/getting-started.html', class: "docs-link"
        %li= link_to 'Branding', '/branding.html', class: "docs-link"
        %li= link_to 'Typography', '/typography.html', class: "docs-link"
        %li= link_to 'Schema', '/schema.html', class: "docs-link"
        %li= link_to 'Themes', '/themes.html', class: "docs-link"
  %hr

  %section.docs-body.content
    -# %ul.docs-menu
    -#   %li
    -#     %a.docs-link{:href => "#type"} Typography

    = yield

  %hr
  %footer.docs-footer
    %ul.docs-menu
      %li Prey
      %li= link_to 'preyproject.com', 'http://preyproject.com', class: "docs-link"
      %li= link_to 'About', '/about.html', class: "docs-link"
