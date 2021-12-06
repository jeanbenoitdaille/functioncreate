function join(...args) {
    let separator = args.shift();
    return args.join(separator);    
}