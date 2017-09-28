# README

To learn vue.js I'm using Laracasts' [Learn vue 2 step by step](laracasts.com/series/learn-vue-2-step-by-step) in a rails 5.2.4 webpacker project. Some sections I've skipped or augmented which I'll try to outline below
## Learn vue 2 step by step sections

| SECTION  | CODE | STATUS |
|----------|------|---------|
| Basic Data Binding | /app/view/data_binding/basic.html.erb | 100% |
|                    | /app/view/data_binding/reactive.html.erb| 100% |
| Setup Vue Devtools | N/A | |
| Lists | /app/view/ | |
| Vue Event Listeners | | |
| Attribute and Class binding |  | |
| The Need for Computed Properties | /app/view/computed/basic.html.erb | 100%  |
| Components 101 | /app/view/components/basic.html.erb | 100% |
| Components Within Components | /app/view/components/child.html.erb | 100% |
|                              | /app/view/components/data.html.erb | 100% |
|                              | /app/view/components/props.html.erb | 100% |
| Practical Component Exercise #1: Message | SKIPPED | |
| Practical Component Exercise #2: Modal | SKIPPED | |
| Practical Component Exercise #3: Tabs  | SKIPPED | |
| Component Communication Example #1: Custom Events | /app/view/communication/basic.html.erb | 100% |
| Component Communication Example #2: Event Dispatcher  | /app/view/communication/dispatcher.html.erb | 100% |
| Named Slots in a Nutshell | | |
| Single-Use Components and Inline Templates |  | |
| Webpack and vue-cli | n/a | |
| Hot Module Replacement |  | |
| Vue Ajax Requests With Axios | /app/view/projects/index.html.erb   | 100% |
| Object-Oriented Forms: Part 1 | /app/view/projects/index.html.erb  | 100% |
| Object-Oriented Forms: Part 2 | /app/view/projects/index.html.erb  | 100% |
| Object-Oriented Forms: Part 3 | /app/view/projects/index.html.erb  | 100% |
| Webpack Config From Scratch | n/a | |
| This is Laravel Mix | /app/view/ | |
| Shared State 101 | /app/view/ | |
| Custom Input Components | /app/view/ | |
| Vue SPA Essentials: Routing | /app/view/ | |
| SPAs and the Backend | /app/view/ | |
| Vue Filters | /app/view/ | |
| Dedicated Form Components | /app/view/ | |
| Testing Vue: Part 1 | /app/view/ | |
| Vue Component Responsibility | /app/view/ | |
| Vue Subclassing | /app/view/ | |
| Scoped Slots | /app/view/ | |

## GETTING STARTED
* ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
* brew install openssl
* rbenv install 2.4.1
* echo "if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi" >> ~/.bash_profile
* rbenv local 2.4.1
* gem install rails -v 5.1.4
* brew install yarn
* brew install node
* git clone 
* cd learn-vue-rails
* rails db:migrate # yup, no more rake in rails 5.x !!
* rails webpack:install # forget if this is needed
