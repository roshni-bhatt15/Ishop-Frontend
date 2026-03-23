const global = {
  mounted() {
    var _a;
    (_a = this.customScripts) == null ? void 0 : _a.forEach((i) => {
      const regex = new RegExp(i == null ? void 0 : i.route_pattern);
      const str = this.$route.path;
      if (regex.test(str)) {
        if (i == null ? void 0 : i.header_script) {
          const script = (void 0).createElement("script");
          script.textContent = i == null ? void 0 : i.header_script_code;
          (void 0).head.appendChild(script);
        }
        if (i == null ? void 0 : i.body_script) {
          const script = (void 0).createElement("script");
          script.textContent = i == null ? void 0 : i.body_script_code;
          (void 0).body.appendChild(script);
        }
      }
    });
  }
};

export { global as g };
//# sourceMappingURL=global-jh2fF79e.mjs.map
