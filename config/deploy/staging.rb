server 'ip-10-0-1-226.us-west-1.compute.internal',
       user: 'deploy',
       roles: %w{app db web background},
       ssh_options: {
          proxy: Net::SSH::Proxy::Command.new('ssh -W %h:%p schoolinsider@secure.west1.sourcepadstage.com')
       }

set :stage, :staging
set :branch,    'master'
set :deploy_to, '/home/deploy/admin'
