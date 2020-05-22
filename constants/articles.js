const articles = [];
const title = 'Как мы делали API для социальной сети (REST API для WEB)';
const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in lobortis erat. Aliquam gravida pharetra dolor vel gravida. Pellentesque viverra leo at mollis tempus. Vivamus rutrum et nunc nec fermentum. Nulla a orci id justo pulvinar commodo ut eu elit. Sed orci eros, mattis sed scelerisque in, ultricies et nulla. Sed neque dolor, maximus eget sapien sed, molestie pulvinar odio. Phasellus eu lectus sed leo bibendum iaculis. Donec porta arcu a quam dapibus, quis malesuada nunc imperdiet. Nullam sed euismod ante. Fusce augue sapien, tempus nec consectetur a, sodales non quam.\n'

Array.from(Array(100)).map((item, i) => {
  articles.push({id: i + 1, content, title})
});

export default articles;
