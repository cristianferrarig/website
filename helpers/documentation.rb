def swatch(type,name,color)

  if type != "tone"
    variables = "
      $#{name}-#{type} <br/>
      $#{name}-#{type}-light <br/>
      $#{name}-#{type}-dark
    "
  else
    variables = "$#{name}-#{type}"
  end

  light_block = "<div class='color-block bg-#{name}-light small'></div>"
  dark_block  = "<div class='color-block bg-#{name}-dark small'></div>"

  base_block = "
    <div class='color-block bg-#{name} light'>
      <div class='show-on-hover'>
        <div class='body primary'><strong>#{name.capitalize}</strong></div>
        <div class='caption'>#{variables} <br/> #{color}</div>
      </div>
    </div>
  "

  if type == "tone"
    template = base_block
  else
    template = light_block + base_block + dark_block
  end

  content_tag(:div, template, class: "color-swatch")

end
