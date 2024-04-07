export const pathsPublic = {
  home: '/',
  productDetails: '/product/:idOrSlug',
};

export const pathsPrivate = {
  accountSettings: '/account-settings',
};

export const paths = { ...pathsPublic, ...pathsPrivate };

export function checkPathMatch(pathname: string, paths: { [key: string]: string }) {
  const allPaths = Object.values(paths);
  const pathFirstSection = pathname.split('/')[1];

  for (let i = 0; i < allPaths.length; i++) {
    if (allPaths[i].split('/')[1] === pathFirstSection) return true;
  }
  return false;
}
