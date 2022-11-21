import * as aws from 'aws-sdk'

enum Attribute {
    accessKeyId = 'accessKeyId',
    secretAccessKey = 'secretAccessKey',
    sessionToken = 'sessionToken'
}

export const templateTags = [
    {
        name: 'awsprofilecreds',
        displayName: 'awsprofilecreds',
        description: 'Insomnia plugin - AWS IAM credential loader from an AWS profile',
        args: [
            {
                displayName: 'Profile name',
                help: 'Specify the AWS profile name for fetching credentials.',
                type: 'string',
                placeholder: 'Specify the AWS profile name for fetching credentials.'
            },
            {
                displayName: 'Attribute',
                type: 'enum',
                options: [
                    {
                        displayName: Attribute.accessKeyId,
                        value: Attribute.accessKeyId,
                    },
                    {
                        displayName: Attribute.secretAccessKey,
                        value: Attribute.secretAccessKey,
                    },
                    {
                        displayName: Attribute.sessionToken,
                        value: Attribute.sessionToken,
                    }
                ]
            }
        ],
        async run(context: object, profileName: string, attribute: Attribute) {
            var creds = new aws.SharedIniFileCredentials({profile: profileName})
            return creds[attribute]
        }
    }
];