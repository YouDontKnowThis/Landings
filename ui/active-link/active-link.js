import { withRouter } from "next/router";

function ActiveLink({ router, href, children }) {
  const handleEvent = (e) => {
    e.preventDefault();
    router.push(href);
  };

  (function prefetchPages() {
    if (typeof window !== "undefined") {
      router.prefetch(router.pathname);
    }
  })();

  const isCurrentPath = router.pathname === href || router.asPath === href;

  return (
    <li>
      <a
        className={isCurrentPath ? "a-link" : ""}
        href={href}
        onClick={handleEvent}
      >
        {children}
      </a>
    </li>
  );
}

export default withRouter(ActiveLink);
