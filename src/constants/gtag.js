export const loginGtag = window.gtag("event", "login", {
  method: "Google",
});

export const signupGtag = window.gtag("event", "sign_up", {
  method: "Google",
});

export function searchGtag(value) {
  window.gtag("event", "search", {
    search_term: value,
  });
}

export function clickGtag(str) {
  window.gtag("event", "select_content", {
    content_type: str,
  });
}