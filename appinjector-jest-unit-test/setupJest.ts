import 'jest-preset-angular';

Object.defineProperty(window, 'CSS', {
    value: {
      supports() {
        return false;
      },
      escape(input) {
        return input;
      }
    }
  });

