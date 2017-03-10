# config valid only for current version of Capistrano
lock '3.6.1'

set :application, 'schoolinsider'
set :repo_url, 'git@github.com:sourcepad/school-insider-admin.git'
set :keep_releases, 5
set :linked_dirs, %w{node_modules}

namespace :deploy do
  before :updated, 'gulp'

  task :gulp_build do
    on roles(:app) do
      # use this if there is a need to install dependency
      #execute "cd #{release_path} && npm install && bower install && rm -rf dist && gulp build"
      execute "cd #{release_path} && mv #{release_path}/vendor #{release_path}/dist/vendor"
      execute "cd #{release_path}/dist/scripts/ && gzip -k -9 *"
      execute "cd #{release_path}/dist/styles && gzip -k -9 *"
    end
  end

  # task :push_client do
  #   on roles(:app) do
  #     execute "mkdir #{release_path}/public"
  #     upload! 'dist/index.html', "#{release_path}/index.html"
  #     upload! 'dist/scripts', "#{release_path}/scripts", recursive: true
  #     upload! 'dist/styles', "#{release_path}/styles", recursive: true
  #   end
  # end

  after :updated, 'deploy:gulp_build'
  after :restart, :clear_cache do
    on roles(:web), in: :groups, limit: 3, wait: 10 do
      # Here we can do anything such as:
      # within release_path do
      #   execute :rake, 'cache:clear'
      # end
    end
  end
  #after :deploy, 'deploy:push_client'
end
