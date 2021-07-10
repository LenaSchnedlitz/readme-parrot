module.exports = {
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  testRegex: '.*\\.test\\.ts',
  transform: {
    '^.+\\.svelte$': [
      'svelte-jester',
      {
        preprocess: true,
      },
    ],
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
