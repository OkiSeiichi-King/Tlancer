import { Link, useMatch, useResolvedPath } from '@inertiajs/inertia-react';
const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className="nav-item">
      <Link
        to={to}
        {...props}
        className={
          isActive ? "nav-link active text-nowrap" : "nav-link text-nowrap"
        }
        aria-current="page"
      >
        {children}
      </Link>
    </li>
  );
};

export default CustomLink;
