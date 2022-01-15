const BASE_PATH = window.location.origin

const select = document.getElementById("documents");

const redoc = document.getElementById("redoc");

select.onchange = function (e) {
  const swagger = e.target.value;
  const url = `${BASE_PATH}/swaggers/${swagger}`

  console.log(url)

  Redoc.init(
    url,
    {
      scrollYOffset: 50,
    },
    document.getElementById("app")
  );
};

const buildOption = function(item) {
  const { name ,path } = item

  const option = document.createElement('option')

  option.value = path
  option.innerHTML = name

  return option
}


window.onload = function() {
  for(const swagger of dataSource) {
    if(!swagger.group) {
      select.appendChild(buildOption(swagger))
      continue;
    }

    const elementGroup = document.createElement('optgroup')
    elementGroup.label = swagger.group

    for(const item of swagger.items) {
      elementGroup.appendChild(buildOption(item))
    }

    select.appendChild(elementGroup)
  }
}
