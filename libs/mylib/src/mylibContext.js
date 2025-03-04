export default function() {
  if (window) {
    window.MylibContext = window.MylibContext || { hydrated: true };
  }
}
