// for test bash: RSS_name1=value1 RSS_name2=value2 node src/cli/env
// for test powershell: $env:RSS_name1="value1"; $env:RSS_name2="value2"; node src/cli/env

const FIND_PREFIX = 'RSS_';

export const parseEnv = () => {
  const rssEnvVars = Object.entries(process.env).reduce((acc, [key, value]) => {
    if (key.startsWith(FIND_PREFIX)) {
      acc.push(`${key}=${value}`)
    }
    return acc;
  }, [])
  console.log(rssEnvVars.join('; '));
};

parseEnv();
