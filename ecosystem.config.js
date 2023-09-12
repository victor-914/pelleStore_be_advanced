module.exports = {
  apps: [
    {
      name: 'app',
      script: 'npm',
      args: 'develop',
      env: {
        NODE_ENV: 'development',
      },
      exp_backoff_restart_delay: 100,
    },
  ],
};