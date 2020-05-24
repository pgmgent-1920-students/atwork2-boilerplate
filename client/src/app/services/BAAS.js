const DOMAIN = 'https://pgmgent-1920-students.github.io/atwork2-case1-baas';

class BAAS {
  static getPosts = async () => {
    const response = await fetch(`${DOMAIN}/data/blog/index.json`);
    const jsonData = await response.json();
    return jsonData;
  }

  static getPost = async (id) => {
    const response = await fetch(`${DOMAIN}/data/blog/index.json`);
    const jsonData = await response.json();
    return jsonData.find(post => post.id === id);
  }

  static getCases = async () => {
    const response = await fetch(`${DOMAIN}/data/cases/index.json`);
    const jsonData = await response.json();
    return jsonData;
  }

  static getCase = async (id) => {
    const response = await fetch(`${DOMAIN}/data/cases/index.json`);
    const jsonData = await response.json();
    return jsonData.find(project => project.Id === id);
  }
}

export default BAAS;
