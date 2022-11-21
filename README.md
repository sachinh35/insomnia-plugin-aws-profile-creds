### Description

It can be a pain to copy paste AWS credentials in the Insomnia app if you're using more than one profile. This plugin tries to make the process easier. This plugin reads your credentials present in the `~/.aws/credentials` file and returns them back to Insomnia. All you have to do is make sure that your credentials are present in the AWS credentials file for a specific AWS profile. 

### Usage

1. Install the plugin.
2. Go to the field in Insomnia where it asks you to populate your AWS credentials.
3. Type `awsprofilecreds`.
4. Double click on `awsprofilecreds` after it fills up in the field. It will then ask you to enter your profile name. 

### Development instructions

Instructions if you want to make changes to the plugin and test it:

1. Clone this repo.
2. Install the node packages first by executing the command `npm install` from inside the directory. This will install all the required modules.
3. Make whatever changes that you want by updating the `main.ts` file. No need to manually update the `main.js` file.
4. Compile the typescript file with `tsc main.ts`. This will generate the `main.js` file. 
5. Go to the Insomnia app and find out the directory where Insomnia installs all plugins. You can find this directory by opening plugins from settings and clicking on "Generate New Plugin". A new plugin will be generated and listed in the plugins section. You will be able to copy the plugin path. That path is where all Insomnia plugins live. More info about Insomnia plugins here: https://docs.insomnia.rest/insomnia/introduction-to-plugins
6. Now that we have the path where all plugins are present, we will copy this plugin repo along with all its files in that path.
7. After copying the files, this plugin will be listed in the list of plugins and the plugin will run the code that you have edited.
8. To conclude, here's the summary of the process:
    1. Clone the repo and make whatever changes that you need to make.
    2. Build the project and copy it to the folder whhere all Insomnia plugins live.
    3. Use your modified plugin directly from the Insomnia app.

### Acknowledgements

This plugin is a slight modification of the awsiam insomnia plugin (link [here](https://github.com/dankelleher/insomnia-plugin-aws-iam)). The `awsiam` plugin allows you to read only from the `default` profile whereas this plugin can read from any profile. 