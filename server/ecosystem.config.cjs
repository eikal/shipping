
module.exports = {
	apps: [
		{
			name: 'auth-service',
			script: './services/auth/index.mjs',
			max_memory_restart: '750M'
		},
		{
			name: 'entities-api-service',
			script: './services/entities-api/index.mjs',
			max_memory_restart: '750M'
		},
		{
			name: 'action-job-service',
			script: './services/action-job/index.mjs',
			max_memory_restart: '750M'
		}
	]
};
